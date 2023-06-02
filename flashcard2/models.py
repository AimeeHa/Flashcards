from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name}"

class FlashcardSet(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="flashcard_sets")
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="flashcard_sets")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}"

class Flashcard(models.Model):
    id = models.AutoField(primary_key=True)
    set_id = models.ForeignKey(FlashcardSet, on_delete=models.CASCADE, related_name="flashcards")
    term = models.CharField(max_length=255)
    definition = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Flashcard {self.id} - {self.term}"