from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USERNAME_FIELD = 'email'
    email = models.EmailField(unique=True)
# Remove 'email' from the 'REQUIRED_FIELDS' list
    REQUIRED_FIELDS = []
    
CATEGORIES = [
        ("English", "English"),
        ("Technology", "Technology"),
        ("Others", "Others")
    ]

class FlashcardSet(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="flashcard_sets")
    set_name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    category = models.CharField(max_length=20, choices=CATEGORIES)
    created_at = models.DateTimeField(auto_now_add=True)

class Flashcard(models.Model):
    id = models.AutoField(primary_key=True)
    set = models.ForeignKey(FlashcardSet, on_delete=models.CASCADE, related_name="flashcards")
    term = models.CharField(max_length=255)
    definition = models.CharField(max_length=255)

class ViewedSet(models.Model):
    id = models.AutoField(primary_key=True)
    user =models.ForeignKey(User, on_delete=models.CASCADE, related_name="viewed_sets")
    set = models.ForeignKey(FlashcardSet, on_delete=models.CASCADE, related_name="viewed_sets")
    viewed_at = models.DateTimeField(auto_now_add=True)

class SavedCard(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="saved_cards")
    flashcard = models.ForeignKey(Flashcard, on_delete=models.CASCADE, related_name="saved_cards")
    saved_at = models.DateTimeField(auto_now_add=True)

class SavedSet(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="saved_sets")
    set = models.ForeignKey(FlashcardSet, on_delete=models.CASCADE, related_name="saved_sets")
    saved_at = models.DateTimeField(auto_now_add=True)