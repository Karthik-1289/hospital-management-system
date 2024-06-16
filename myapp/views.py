from rest_framework import viewsets,permissions,status
from .models import *
from .serializers import *
from rest_framework.response import Response


class DoctorViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset,many =True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors ,status=400)


    def retrieve(self, request, pk=None):
        doctor = self.queryset.get(pk=pk)
        serializer = self.serializer_class(doctor)
        return Response(serializer.data)
    
    def destroy(self, request, pk=None):
        try:
            doctor = self.queryset.get(pk=pk)
            doctor.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Doctor.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, pk=None):
        doctor = self.queryset.get(pk=pk)
        serializer = self.serializer_class(doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class AdmindViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Admind.objects.all()
    serializer_class = AdmindSerializer
    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset,many =True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors ,status=400)

    def retrieve(self, request, pk=None):
        admind = self.queryset.get(pk=pk)
        serializer = self.serializer_class(admind)
        return Response(serializer.data)
    
    def destroy(self, request, pk=None):
        try:
            doctor = self.queryset.get(pk=pk)
            doctor.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Admind.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, pk=None):
        admind = self.queryset.get(pk=pk)
        serializer = self.serializer_class(admind, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    

        
    
    
class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset,many =True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors ,status=400)

    def retrieve(self, request, pk=None):
        login = self.queryset.get(pk=pk)
        serializer = self.serializer_class(login)
        return Response(serializer.data)
    
    def destroy(self, request, pk=None):
        try:
            login = self.queryset.get(pk=pk)
            login.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Login.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, pk=None):
        login = self.queryset.get(pk=pk)
        serializer = self.serializer_class(login, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class PatientViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset,many =True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors ,status=400)

    def retrieve(self, request, pk=None):
        patient = self.queryset.get(pk=pk)
        serializer = self.serializer_class(patient)
        return Response(serializer.data)
    
    def destroy(self, request, pk=None):
        try:
            patient = self.queryset.get(pk=pk)
            patient.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Patient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, pk=None):
        patient = self.queryset.get(pk=pk)
        serializer = self.serializer_class(patient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class UserViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset,many =True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors ,status=400)

    def retrieve(self, request, pk=None):
        users = self.queryset.get(pk=pk)
        serializer = self.serializer_class(users)
        return Response(serializer.data)
    
    def destroy(self, request, pk=None):
        try:
            users = self.queryset.get(pk=pk)
            users.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Users.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, pk=None):
        users = self.queryset.get(pk=pk)
        serializer = self.serializer_class(users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


