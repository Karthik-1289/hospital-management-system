from django.db import models

# Create your models here.

class Doctor(models.Model):
    dr_code = models.IntegerField(primary_key=True)
    dr_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=30)
    date_of_birth=models.DateField()
    address = models.CharField(max_length=30)
    date_of_join=models.DateField()
    designation=models.CharField(max_length=30)
    phone=models.IntegerField()




class Patient(models.Model):
    names = models.CharField(max_length=30)    
    gender = models.CharField(max_length=30)
    age = models.IntegerField()
    address = models.CharField(max_length=30)    
    phone = models.IntegerField()
    relative_name = models.CharField(max_length=30)
    relative_address = models.CharField(max_length=30)
    department=models.CharField(max_length=30)
    doctor_name = models.CharField(max_length=30)
    date=models.DateField(max_length=30)
    id=models.IntegerField(primary_key=True)



class Login(models.Model):
    user_name = models.CharField(max_length=30)    
    user_id=models.IntegerField(primary_key=True)
    email_id=models.CharField(max_length=30)
    password=models.CharField(max_length=30,unique=True)



class Admind(models.Model):
    username = models.CharField(max_length=30)    
    password=models.CharField(max_length=30)
    admin_id=models.IntegerField(primary_key=True,auto_created=True)

    def __str__(self):
        return self.username


class Users(models.Model):
    uname = models.CharField(max_length=30)    
    emp_id=models.IntegerField(primary_key=True)
    email_id=models.CharField(max_length=30)
    password=models.CharField(max_length=30)

