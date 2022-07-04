from django.db import models

# Create your models here.
class Driver(models.Model):
    
    name = models.TextField()

    license = models.TextField()
    
    car = models.ForeignKey("Car", on_delete=models.SET_NULL, null=True,related_name='owner')

    def __str__(self):
        return self.name


class Car(models.Model):

    make = models.TextField()

    model = models.TextField()

    year = models.IntegerField()

    img = models.TextField(null=True)

    vin = models.TextField()

    def __str__(self):
        return self.model

   

    