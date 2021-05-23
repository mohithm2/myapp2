from django.db import models

# Create your models here.
class posts(models.Model):
   caption= models.CharField(max_length=10)
   comments_count = models.IntegerField()
   like_count = models.IntegerField()
   image = models.ImageField()
   timestamp = models.DateTimeField()
   username = models.CharField(max_length=20)
   engagement = models.IntegerField()
   impressions = models.IntegerField()
   reach = models.IntegerField()
   post_id = models.AutoField(primary_key=True)

class reports(models.Model):
    name = models.CharField(max_length=20)
    hastag = models.CharField(max_length=20)
    impact = models.IntegerField()
    report_id = models.AutoField(primary_key=True)