from rest_framework import serializers
from . models import posts,reports

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = posts
        fields = '__all__'

class ReportSerilizer(serializers.ModelSerializer):
    class Mets:
        model = reports
        fields = '__all__'
