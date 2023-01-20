from django.shortcuts import render
from django.utils.dateparse import parse_datetime
from django.utils.timezone import is_aware, make_aware
# Create your views here.
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from .forms import  TaskForm
from django.http import HttpResponse,HttpResponseNotFound,HttpResponseRedirect
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from .models import Task

class SignUp(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

@login_required
def add_task(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('schedule')
    else:
        form = TaskForm()
    return render(request, 'add_task.html', {'form':form})

@login_required
def update_task(request, task_id=None):
    if request.method =='GET':
        try:
            entry = Task.objects.get(pk=task_id)
        except:
            return HttpResponseNotFound("task_id "+str(task_id)+" does not exist. Please enter right id")
        if entry.user != request.user:
            return HttpResponseNotFound("task_id " + str(task_id) + " does not exist. Please enter right id")

        form = TaskForm(initial={'date_time':str(entry.date_time)[:-6],'task':entry.task})
        return render(request,'update_task.html', {'form':form})
    else:
        form = TaskForm(request.POST)
        if form.is_valid():
            entry = Task.objects.get(pk=task_id)
            entry.date_time = form.cleaned_data['date_time']
            entry.task = form.cleaned_data['task']
            entry.save()
            return redirect('schedule')

@login_required
def display_schedule(request):
    tasks = Task.objects.filter(user=request.user)
    return render(request,'schedule.html',{'tasks':tasks})

def mark_completed(request,task_id=None):
    task = Task.objects.get(pk=task_id)
    task.completed = True
    task.save()
    return redirect('schedule')

def delete_task(request,task_id=None):
    task = Task.objects.get(pk=task_id)
    task.delete()
    return redirect('schedule')