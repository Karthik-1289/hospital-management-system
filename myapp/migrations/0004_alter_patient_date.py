# Generated by Django 5.0.6 on 2024-06-15 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_rename_name_patient_names_rename_name_users_uname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='date',
            field=models.DateField(max_length=30),
        ),
    ]
