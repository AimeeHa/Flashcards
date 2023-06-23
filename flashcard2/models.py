from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users require an email field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

class User(AbstractUser):
    username = None
    USERNAME_FIELD = 'email'
    email = models.EmailField(unique=True)
    objects = UserManager()
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