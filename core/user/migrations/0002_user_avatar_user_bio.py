# Generated by Django 4.1.7 on 2023-03-23 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
