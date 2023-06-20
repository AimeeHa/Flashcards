from rest_framework import serializers
from .models import FlashcardSet, Flashcard

class FlashcardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashcardSet
        fields = ("id", "user", "name", "description", "category", "created_at")

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ("id", "set", "term", "definition", "created_at", "updated_at")