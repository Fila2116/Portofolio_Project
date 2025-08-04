from rest_framework import serializers
from . models import Profile
from . models import Project


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields = '__all__'