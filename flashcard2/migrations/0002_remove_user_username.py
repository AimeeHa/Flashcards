# Generated by Django 4.2.1 on 2023-06-23 19:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('flashcard2', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
    ]