from rest_framework import serializers
from MoviesApp.models import Actors, Movies, Joint
from django.contrib.auth.models import User

class ActorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actors
        fields = ('ActorId',
                'ActorName',
                'ActorDOB')

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ('MovieId',
                'MovieTitle',
                'MovieDescription',
                'MovieReleaseDate',
                'MovieUpVote',
                'MovieDownVote')


class JointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Joint
        fields = ('JointId',
                'MovieId',
                'ActorId')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password' : {'write_only' : True, 'required' : True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
