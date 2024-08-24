from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests

# View to get movies
@api_view(['GET'])
def get_movies(request):
    search_value = request.GET.get('search', '')
    
    if not search_value:
        return Response({'Error': 'No search query provided'}, status=400)
    
    url = f'http://www.omdbapi.com/?s={search_value}&type=movie&apikey=263d22d8'
    response = requests.get(url)
    data = response.json()
    
    return Response(data)

# View to get series
@api_view(['GET'])
def get_series(request):
    search_value = request.GET.get('search', '')
    
    if not search_value:
        return Response({'Error': 'No search query provided'}, status=400)
    
    url = f'http://www.omdbapi.com/?s={search_value}&type=series&apikey=263d22d8'
    response = requests.get(url)
    data = response.json()
    
    return Response(data)
