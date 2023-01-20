"""Todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from app.views import SignUp,add_task,update_task, display_schedule, mark_completed, delete_task

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('',TemplateView.as_view(template_name='home.html'), name='home'),
    path('signup', SignUp.as_view(), name='signup'),
    path('add_task', add_task, name='add_task'),
    path('update_task/<int:task_id>', update_task, name='update_task'),
    path('schedule', display_schedule, name='schedule'),
    path('mark_completed/<int:task_id>', mark_completed, name='mark_completed'),
    path('delete_task/<int:task_id>', delete_task, name='delete_task'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

