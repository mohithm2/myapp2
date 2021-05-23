from django.conf.urls import url
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^post$',views.postApi),
    url(r'^post/([0-9]+)$',views.postApi)
]
