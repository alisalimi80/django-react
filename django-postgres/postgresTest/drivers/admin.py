from django.contrib import admin

# Register your models here.

from cars.models import Driver , Car


admin.site.register(Driver)
admin.site.register(Car)