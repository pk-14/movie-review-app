from django.contrib import admin
from .models import Movies, Actors, Joint

admin.site.register(Movies)
admin.site.register(Actors)
admin.site.register(Joint)