from rest_framework import fields,serializers
from .models import *

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields =('dr_code','dr_name','gender','date_of_birth','address' ,'date_of_join','designation','phone')
        
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields =('names','gender','age','address','phone','relative_name','relative_address', 'department','doctor_name','date','id')

     
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields =('user_name','user_id','email_id','password')

     
class AdmindSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admind
        fields =('username','password','admin_id')

     
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields =('uname','emp_id','email_id','password')

