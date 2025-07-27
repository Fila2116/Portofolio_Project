from django.db import models

# Create your models here.

class Profile(models.Model):
    full_name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    profile_pic = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)

    def __str__(self):
        return self.full_name
