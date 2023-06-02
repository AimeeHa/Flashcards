from django.db import models

# Create your models here.

class User:
    def __init__(self, name, password):
        self.name = name
        self.password = password
        
