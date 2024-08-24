from django.urls import path
from .views import get_movies, get_series

urlpatterns = [
    path('movies/', get_movies, name='get_movies'),
    path('series/', get_series, name='get_series'),
]
