from dataclasses import field
from rest_framework import serializers
from .models import Car , Driver

class CarSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField(many=True)
    class Meta:
        model = Car
        fields = ('id', 'make', 'model', 'year','img','owner')



class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ('id','name','license','car')