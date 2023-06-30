from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import User, FlashcardSet, Flashcard, ViewedSet, SavedCard, SavedSet
from .serializers import UserSerializer, FlashcardSetSerializer, FlashcardSerializer, ViewedSetSerializer, SavedCardSerializer, SavedSetSerializer

@api_view(["GET"])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    try:
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    except:
        return Response({"error": "User not found."}, status=404)

@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully."}, status=201)
    return Response({"error": serializer.errors}, status=400)

@api_view(["POST"])
@authentication_classes([SessionAuthentication])
@permission_classes([])
def login_view(request):
    serializer = UserSerializer(data=request.data)
    email = serializer.initial_data['email']
    password = serializer.initial_data['password']
    user = authenticate(request, email=email, password=password)
    if user is not None:
        login(request, user)
        return Response({"message": "User logged in successfully."}, status=200)
    else:
        # Invalid credentials
        return Response({"error": "Invalid credentials."}, status=400)

@api_view(["POST"])
@authentication_classes([])
@permission_classes([])
def logout_view(request):
    logout(request)
    return Response({"message": "User logged out successfully."}, status=200)

