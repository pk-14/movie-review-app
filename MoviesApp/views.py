import imp
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http.response import JsonResponse
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser

from MoviesApp.models import Actors, Movies, Joint
from MoviesApp.serializers import ActorsSerializer, MoviesSerializer, JointSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@csrf_exempt
def actorsApi(request, id = 0):
    if request.method == "GET":
        actors = Actors.objects.all()
        actors_serializer = ActorsSerializer(actors, many = True)
        joint = Joint.objects.all()
        joint_serializer = JointSerializer(joint, many = True)
        for i in range(len(actors_serializer.data)):
            movieIdarr = []
            for j in range(len(joint_serializer.data)):
                if actors_serializer.data[i]["ActorId"] == joint_serializer.data[j]["ActorId"]:
                    movieIdarr.append(joint_serializer.data[j]["MovieId"])
                    actors_serializer.data[i].update({'MovieIdArrLen': len(movieIdarr)})
        return JsonResponse(actors_serializer.data, safe=False)

@csrf_exempt
def moviesApi(request, id = 1):
    if request.method == "GET":
        movies = Movies.objects.all()
        movies_serializer = MoviesSerializer(movies, many = True)
        joint = Joint.objects.all()
        joint_serializer = JointSerializer(joint, many = True)
        for i in range(len(movies_serializer.data)):
            actorIdarr = []
            for j in range(len(joint_serializer.data)):
                if movies_serializer.data[i]["MovieId"] == joint_serializer.data[j]["MovieId"]:
                    actorIdarr.append(joint_serializer.data[j]["ActorId"])
                    movies_serializer.data[i].update({'ActorIdArrLen': len(actorIdarr)})
        return JsonResponse(movies_serializer.data, safe=False)
    
    elif request.method == "PUT":
        movies_data = JSONParser().parse(request)
        movie_update = Movies.objects.get(MovieId = movies_data["MovieId"])
        movies_serializer = MoviesSerializer(movie_update, data= movies_data)
        print(movies_serializer)
        if movies_serializer.is_valid():
            movies_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to Update", safe=False)

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

