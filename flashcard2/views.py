from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import User, FlashcardSet, Flashcard, ViewedSet, SavedCard, SavedSet
from .serializers import UserSerializer, FlashcardSetSerializer, FlashcardSerializer, ViewedSetSerializer, SavedCardSerializer, SavedSetSerializer

@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({"message": "User registered successfully."}, status=201)
    return JsonResponse({"error": serializer.errors}, status=400)