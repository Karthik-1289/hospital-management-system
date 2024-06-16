
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('myapp.urls')),
    path('doctor/',include('myapp.urls')),
    path('patient/',include('myapp.urls')),
    path('login/',include('myapp.urls')),
    path('admind/',include('myapp.urls')),
    path('users/',include('myapp.urls')),
]

