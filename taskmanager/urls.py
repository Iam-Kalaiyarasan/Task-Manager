"""
URL configuration for taskmanager project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    path(
        'admin/',
        admin.site.urls
    ),

    path(
        'api/',
        include('task.urls')
    ),

    # React SPA: serve the built frontend at the site root.
    # This keeps `/api/*` working while making GET / return the React app.
    path(
        '',
        (lambda request: __import__('django.http').http.FileResponse(
            open(
                __import__('pathlib').Path(__import__('pathlib').Path(__file__).resolve().parent.parent)
                / 'frontend' / 'build' / 'index.html',
                'rb',
            ),
            content_type='text/html',
        )),
    ),
]

