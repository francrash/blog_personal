from django.urls import path
from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()) ,#enlazado con views
    path('by_category', ListPostsByCategoryView.as_view()), #enlazado con views
    path('detail/<slug>', PostDetailView.as_view()),
]
