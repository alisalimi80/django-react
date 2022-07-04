from django.shortcuts import render
from matplotlib.style import context

# Create your views here.

from cars.models import  Driver

def driver_detail(request, pk):
    
    

    owner_obj = Driver.objects.get(pk=pk)


    context = {

        "drivers": owner_obj,

    }


    return render(request, "driver_detail.html", context)


def alldriver(request):
    

    owner_obj = Driver.objects.all()


    context={

        'alldrivers' : owner_obj

    }

    return render(request,"alldrivers.html",context)