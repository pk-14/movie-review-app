from django.urls import re_path
from MoviesApp import views
from django.conf.urls import include
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
from MoviesApp import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^auth/', ObtainAuthToken.as_view()),
    re_path(r'^actors/$', views.actorsApi),
    re_path(r'^movies/$', views.moviesApi)
]