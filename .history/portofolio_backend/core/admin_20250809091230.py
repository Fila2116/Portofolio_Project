from django.contrib import admin
from .models import Profile, Project,ContactMessage

admin.site.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id','full_name','linkedin0','github')
    search_fields = ('full_name',)
admin.site.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id','title','tech_stack','demo_link')
    search_fields = ('title','tech_stack')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('id','name','email','created_at')
    search_fields = ('name','email')
    list_filter = ('created_at',)
    readonly_fields = ('name',"email",'message','created_at')

