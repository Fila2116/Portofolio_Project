from django.urls import path
from .views import ProfileListAPIView

urlpatterns = [
    path('profiles/',ProfileLIstAPIView.as_view(),name='profile-list'),
]