from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login
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

@api_view(["POST"])
def login_view(request):
    serializer = UserSerializer(data=request.data)
    email = serializer.initial_data['email']
    password = serializer.initial_data['password']
    user = authenticate(request, email=email, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({"message": "User logged in successfully."}, status=200)
    else:
        # Invalid credentials
        return JsonResponse({"error": "Invalid credentials."}, status=400)


def check_authentication(request):
    if request.user.is_authenticated:
        return JsonResponse({'is_authenticated': True})
    else:
        return JsonResponse({'is_authenticated': False})
