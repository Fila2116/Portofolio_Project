from django.shortcuts import render
from rest_framework import generics
from .serializers import ProfileSerializer
from . models import Profile

class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
