# from django.urls import path
# from .views import demo_home, register, login, profile

# urlpatterns = [
#     path('demo/', demo_home, name='demo_home'),
#     path('register/', register, name='register'),
#     path('login/', login, name='login'),
#     path('profile/', profile, name='profile'),
# ]

from django.urls import path
from .views import UserRegistrationView, LoginView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]