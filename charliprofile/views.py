from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView
# Create your views here.

class HomeView(TemplateView):
    template_name = 'home.html'

@method_decorator(login_required, name='dispatch')
class ResumeView(TemplateView):
    template_name = 'resume.html'
