from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Category,Post
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