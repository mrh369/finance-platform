# from django.shortcuts import render
# from django.http import JsonResponse

# # Create your views here.
# def demo_home(request):
#     return JsonResponse({"message": "Hello, this is the users app home page."})

# def register(request):
#     if request.method == "POST":
#         # Handle user registration logic here
#         return JsonResponse({"message": "User registered successfully."})
#     #TODO: Eventually add some kind of email authentication to this
#     return JsonResponse({"error": "Invalid request method."}, status=400)

# def login(request):
#     if request.method == "POST":
#         # Handle user login logic here
#         return JsonResponse({"message": "User logged in successfully."})
#     return JsonResponse({"error": "Invalid request method."}, status=400)

# def profile(request):
#     # Check if logged in first? - either here or react side
#     if request.method == "GET":
#         # Handle fetching user profile logic here
#         return JsonResponse({"username": "demo_user", "email": "demo_user@example.com"})
#     return JsonResponse({"error": "Invalid request method."}, status=400)


from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserRegistrationSerializer

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
              "message": "User registered successfully"
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"message": "Invalid email or password"}, status=400)

        user = authenticate(username=user.username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "message": "Login successful",
                "token": token.key,
                "username": user.username,
                "email": user.email
            })
        else:
            return Response({"message": "Invalid email or password"}, status=400)