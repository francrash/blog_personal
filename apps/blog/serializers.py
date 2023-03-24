from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        field=[
            'id',
            'title',
            'slug',
            'thumbail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category'

            
        ]