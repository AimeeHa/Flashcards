from rest_framework import serializers
from .models import User, FlashcardSet, Flashcard, ViewedSet, SavedCard, SavedSet

class UserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="first_name")

    class Meta:
        model = User
        fields = ["name", "email", "password"]

class FlashcardSetSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%d/%m/%Y %H:%M:%S')
    
    class Meta:
        model = FlashcardSet
        fields = ["id", "user", "set_name", "description", "category", "created_at"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['created_at'] = instance.created_at.strftime('%d/%m/%Y %H:%M:%S')
        return representation

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ("__all__")

class ViewedSetSerializer(serializers.ModelSerializer): 
    class Meta:
        model = ViewedSet
        fields = ("__all__")

class SavedCardSerializer(serializers.ModelSerializer):
    saved_at = serializers.DateTimeField(format='%d/%m/%Y %H:%M:%S')

    class Meta:
        model = SavedCard
        fields = ("__all__")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['saved_at'] = instance.saved_at.strftime('%d/%m/%Y %H:%M:%S')
        return representation
    
class SavedSetSerializer(serializers.ModelSerializer):
    saved_at = serializers.DateTimeField(format='%d/%m/%Y %H:%M:%S')

    class Meta:
        model = SavedSet
        fields = ("__all__")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['saved_at'] = instance.saved_at.strftime('%d/%m/%Y %H:%M:%S')
        return representation
    
