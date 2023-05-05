from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Category,Post, ViewCount
from django.db.models import Q
from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

class BlogListView(APIView):
    permission_classes= (permissions.AllowAny,)

    def get(self,request, format=None):
        if Post.objects.all().exists():

            posts = Post.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)

            serializer = PostListSerializer(posts, many=True)

            return Response({'posts': serializer.data}, status=status.HTTP_200_OK) 
        else:
            return Response({'error': "No posts found"}, status=status.HTTP_404_NOT_FOUND)
        
class ListPostsByCategoryView(APIView):

    permissions_classes = (permissions.AllowAny)

    def get(self, request, format=None):
        if Post.objects.all().exists():

            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            posts = Post.objects.order_by("-published").all()
            
            # Si la categoria tiene padre
            #if category.parent:
             #   posts = posts.filter(category=category)
               
            # si no tiene una categoria padre quiere decir que es una categoria padre
           # else:

                #filtrar por categoria sola
            if not Category.objects.filter(parent=category).exists():
                    
                posts= posts.filter(category=category)

                # Si la categoria padre tiene hijos, filtrar por la categoria padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]

                for cat in sub_categories:
                    filtered_categories.append(cat)
                    
                filtered_categories= tuple(filtered_categories)
                posts = posts.filter(category__in = filtered_categories)
                    

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts,request)
            serializer = PostListSerializer(results,many=True)
                    
            return paginator.get_paginated_response({'posts': serializer.data})
            
        else:
            return Response({'error': 'Noposts Found'}, status=status.http_404_NOT_FOUND)
        
        
class PostDetailView(APIView):
    def get(self,request,slug, format=None):

        if Post.objects.filter(slug=slug).exists():
            post = Post.objects.get(slug=slug)

            serializer = PostSerializer(post)

            address = request.META.get('HTTP_XFORWARDED_FOR')
           
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(post=post,ip_address = ip):
                view = ViewCount(post=post,ip_address = ip)
                view.save()
                post.views += 1
                post.save()


            return Response({'post': serializer.data}, status=status.HTTP_200_OK) 
        else:
            return Response({'error': "No posts detail"}, status=status.HTTP_404_NOT_FOUND)


class SearchBlogView(APIView):
    def get(self, request, format=None):

        search_term= request.query_params.get('s')
        matches = Post.objects.filter(
            Q(title__icontains = search_term) | 
            Q(description__icontains = search_term) | 
            Q(category__name__icontains = search_term)
        )
        
        serializer = PostListSerializer(matches, many=True)
        return Response({'filtered_posts': serializer.data}, status=status.HTTP_200_OK) 
