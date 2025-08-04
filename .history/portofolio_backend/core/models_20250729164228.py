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

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(blank=True)
    tech_stack = models.CharField(max_length = 200)
    demo_link = models.URLField(blank=True)
    source_code = models.URLField(blank=True)

    def __str__(self):
        return self.title
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

