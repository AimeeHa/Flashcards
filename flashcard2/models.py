from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

CATEGORIES = [
        ("English", "English"),
        ("Technology", "Technology"),
        ("Others", "Others")
    ]

class FlashcardSet(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="flashcard_sets")
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    category = models.CharField(max_length=20, choices=CATEGORIES)
    created_at = models.DateTimeField(auto_now_add=True)

class Flashcard(models.Model):
    id = models.AutoField(primary_key=True)
    set = models.ForeignKey(FlashcardSet, on_delete=models.CASCADE, related_name="flashcards")
    term = models.CharField(max_length=255)
    definition = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True).strftime("%b %-d %Y, %-I:%M %p")
    updated_at = models.DateTimeField(auto_now=True).strftime("%b %-d %Y, %-I:%M %p")
