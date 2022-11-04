from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer
from .products import products

# Create your views here.
@api_view(['GET'])
def getRoutes(request) -> Response:
    print("Starting views.getRoutes() request")
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request) -> Response:
    print("Starting views.getProducts() request")
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, product_id: str) -> Response:
    print(f"Starting views.getRoutes() request, product_id={product_id}")
    product = Product.objects.get(_id=product_id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)