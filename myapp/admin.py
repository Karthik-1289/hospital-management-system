from django.contrib import admin
from .models import *

# Register your models here.
models_list = [Doctor,Patient,Login,Admind,Users]
admin.site.register(models_list)