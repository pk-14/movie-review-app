from operator import mod
from pyexpat import model
from django.db import models

# Create your models here.
class Actors(models.Model):
    ActorId = models.AutoField(primary_key= True)
    ActorName = models.CharField(max_length=50)
    ActorDOB = models.DateField()

class Movies(models.Model):
    MovieId = models.AutoField(primary_key= True)
    MovieTitle = models.CharField(max_length=50)
    MovieDescription = models.CharField(max_length=200)
    MovieReleaseDate = models.DateField()
    MovieUpVote = models.IntegerField(default=0)
    MovieDownVote = models.IntegerField(default=0)

class Joint(models.Model):
    JointId = models.AutoField(primary_key=True)
    MovieId = models.ForeignKey(Movies, on_delete=models.CASCADE)
    ActorId = models.ForeignKey(Actors, on_delete=models.CASCADE)


