from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Category,Post
from .serializers import PostSerializer

class BlogListView(APIView):
    permission_classes= (permissions.AllowAny,)

    def get(self,request, format=None):
        if Post.objects.all().exists():
            print('list posts')
            return Response({'post': 'test message'}, status=status.HTTP_200_OK) 
        else:
            return Response({'error': "No posts found"}, status=status.HTTP_404_NOT_FOUND)