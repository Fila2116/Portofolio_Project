from django.shortcuts import render
from rest_framework import generics
from .serializers import ProfileSerializer
from . models import Profile
from . models import Project
from .serializers import ProjectSerializer

class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

