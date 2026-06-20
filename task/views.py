from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):

    serializer_class = TaskSerializer

    def get_queryset(self):

        return Task.objects.all().order_by(
            'due_date'
        )

