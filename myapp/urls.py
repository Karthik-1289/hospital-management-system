
from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('doctor', DoctorViewset)
router.register('patient', PatientViewset)
router.register('login', LoginViewset)
router.register('admind', AdmindViewset)
router.register('user', UserViewset)

urlpatterns=[
    path('doctor/', DoctorViewset.as_view({'get': 'list','post':'create'})), 
    path('doctor/<int:pk>/', DoctorViewset.as_view({'get': 'retrieve', 'put': 'update','delete': 'destroy'})),
    path('admind/', AdmindViewset.as_view({'get': 'list','post':'create'})),
    path('admind/<int:pk>/', AdmindViewset.as_view({'get': 'retrieve', 'put': 'update','delete': 'destroy'})),
    path('login/', LoginViewset.as_view({'get': 'list','post':'create'})),
    path('login/<int:pk>/', LoginViewset.as_view({'get': 'retrieve', 'put': 'update','delete': 'destroy'})),   
    path('patient/', PatientViewset.as_view({'get': 'list','post':'create'})),
    path('patient/<int:pk>/', PatientViewset.as_view({'get': 'retrieve', 'put': 'update','delete': 'destroy'})),
    path('user/', UserViewset.as_view({'get': 'list','post':'create'})),
    path('user/<int:pk>/', UserViewset.as_view({'get': 'retrieve', 'put': 'update','delete': 'destroy'})),
    path('', include(router.urls)),
    path('', include(router.urls)),
    path('', include(router.urls)),
    path('', include(router.urls)),
    path('', include(router.urls)),
    
]