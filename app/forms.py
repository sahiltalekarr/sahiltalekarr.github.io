from django.forms import ModelForm,DateTimeInput
from app.models import Task

class TaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ['date_time','task']
    widgets = {
        'completeDateTime': DateTimeInput(attrs={'class': 'datetime-input'})
    }