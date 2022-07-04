from lib2to3.pgen2 import driver
from statistics import mode
from typing import OrderedDict
from django.shortcuts import render
from rest_framework.decorators import api_view
# Create your views here.
from cars.models import Car, Driver
from rest_framework import viewsets
from .serializers import CarSerializer
from .models import Car
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from rest_framework import status
from .serializers import DriverSerializer

# Create your views here.

@api_view(['GET', 'POST'])
def car_list(request ,format=None):
    """
    """
    if request.method == 'GET':
        cars = Car.objects.order_by('id')
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def car_detail(request, pk):

    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CarSerializer(car)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CarSerializer(Car, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        car.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def driver_list(request , format=None):
    """
    """
    if request.method == 'GET':
        driver = Driver.objects.order_by('id')
        serializer = DriverSerializer(driver, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
def driver_detail(request, pk):

    try:
        driver = Driver.objects.get(pk=pk)
    except Driver.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DriverSerializer(driver)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DriverSerializer(Driver, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        driver.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






def car_detail1(request, pk):

    

    owner_obj = Driver.objects.get(pk=pk)

    car_objs = Car.objects.filter(owner_id=owner_obj.id)

    context = {

        "vehicles": car_objs,

        "drivers": owner_obj,

    }


    return render(request, "car_detail.html", context)


