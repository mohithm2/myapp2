from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from . models import posts,reports
from . serializers import PostSerializer, ReportSerilizer
@csrf_exempt
def postApi(request,id=0):
    if request.method=='GET':
        postss = posts.objects.all()
        posts_serializer = PostSerializer(postss, many=True)
        return JsonResponse(posts_serializer.data, safe=False)

    elif request.method=='POST':
        post_data=JSONParser().parse(request)
        post_serializer = PostSerializer(data=post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        post_data = JSONParser().parse(request)
        post=posts.objects.get(postId=post_data['postId'])
        post_serializer=PostSerializer(post,data=post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        post=posts.objects.get(postId=id)
        post.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

