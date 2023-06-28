from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .models import User, FlashcardSet, Flashcard, ViewedSet, SavedCard, SavedSet
from .serializers import UserSerializer, FlashcardSetSerializer, FlashcardSerializer, ViewedSetSerializer, SavedCardSerializer, SavedSetSerializer

@api_view(["GET"])
def get_user_info(request):
    try:
        serializer = UserSerializer(request.user)
        return JsonResponse(serializer.data)
    except:
        return JsonResponse({"error": "User not found."}, status=404)

@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({"message": "User registered successfully."}, status=201)
    return JsonResponse({"error": serializer.errors}, status=400)

@api_view(["POST"])
@csrf_exempt
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

@api_view(["POST"])
@login_required
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "User logged out successfully."}, status=200)