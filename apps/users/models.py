from django.db import models
from django.contrib.auth.models import AbstractUser
from autoslug import AutoSlugField
from django.db.models.signals import post_save
import requests
from django.conf import settings
import json, uuid
import re

# pattern_special_characters = r'\badmin\b|[!@#^&*()_+-=[]{}|;:",.<>/?]|\s'


        
class UserAccount(AbstractUser):
    roles=(
        ('usuario','Usuario'),
        ('admin','Admin'),
        ('moderador','Moderador'),
        ('soporte','Soporte'),
        ('editor','Editor'),
    )
    email=models.CharField(max_length=255, unique=True)
    username=models.CharField(max_length=255, unique=True)
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255) 
    slug = AutoSlugField(populate_from='first_name')
    role= models.CharField(max_length=15, choices=roles, default='usuario')    
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']    
    