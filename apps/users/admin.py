from django.contrib import admin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from apps.users.models import UserAccount


@admin.register(UserAccount)
class UserAdmin(BaseUserAdmin):
    pass