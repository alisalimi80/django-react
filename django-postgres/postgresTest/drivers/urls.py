from django.urls import path

from . import views



urlpatterns = [

    path("", views.alldriver, name="alldrivers"),

    path("<int:pk>/", views.driver_detail, name="driver_detail"),

    

]