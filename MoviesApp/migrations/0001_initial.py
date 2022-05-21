# Generated by Django 4.0.4 on 2022-04-30 20:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actors',
            fields=[
                ('ActorId', models.AutoField(primary_key=True, serialize=False)),
                ('ActorName', models.CharField(max_length=50)),
                ('ActorDOB', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Movies',
            fields=[
                ('MovieId', models.AutoField(primary_key=True, serialize=False)),
                ('MovieTitle', models.CharField(max_length=50)),
                ('MovieDescription', models.CharField(max_length=200)),
                ('MovieReleaseDate', models.DateField()),
                ('MovieActors', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MoviesApp.actors')),
            ],
        ),
    ]
