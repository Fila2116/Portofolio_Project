from django.urls import path
from .views import ProfileListAPIView
from .views import ProjectListAPIView
from .views import ContactMessageCreateAPIView

urlpatterns += [
    path('profiles/', ProfileListAPIView.as_view(),name='profile-list'),
    path('projects/', ProjectListAPIView.as_view(),name='project-list'),
    path('contact/', ContactMessageCreateAPIView.as_view(),name='contact-create'),
]