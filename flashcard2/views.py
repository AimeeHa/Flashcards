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
@authentication_classes([])
@permission_classes([])
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

@api_view(["POST"])
@authentication_classes([SessionAuthentication])
@permission_classes([])
def create_set(request):
    set_serializer = FlashcardSetSerializer(data=request.data)
    cards_serializer = FlashcardSerializer(data=request.data)
    cards_info = cards_serializer.initial_data['flashcards']
    print('CHECK SET', set_serializer)
    print('CARD INFO', cards_info, type(cards_info))
    if set_serializer.is_valid():
        set_serializer.save()
        for i in range(len(cards_info)):
            new_term = cards_info[i]['term']
            new_definition = cards_info[i]['definition']
            new_card = Flashcard.objects.create(set=set_serializer.instance, term=new_term, definition=new_definition)
            print('CHECK CARDS', new_card)
        return Response({"message": "Set created successfully."}, status=201)
    print('CHECK SET ERROR', set_serializer.errors)
    print('CHECK CARDS ERROR', cards_serializer.errors)
    return Response({"set_error": set_serializer.errors, "card_error": cards_serializer.errors}, status=400)