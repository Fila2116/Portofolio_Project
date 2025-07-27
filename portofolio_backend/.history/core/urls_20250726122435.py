from django.urls import path
from .views import ProfileListAPIView
from .views import ProjectListAPIView

urlpatterns = [
    path('profiles/', ProfileListAPIView.as_view(),name='profile-list'),
    path('projects/', ProjectListAPIView.as_view(),name='project-list'),
]