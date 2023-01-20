from django.db import models
from django.conf import settings
# Create your models here.
class Task(models.Model):
    date_time = models.DateTimeField(blank=False)
    task = models.TextField()
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


