# Generated by Django 4.1.7 on 2023-03-30 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0003_user_is_staff_user_posts_liked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
    ]