from django.shortcuts import render
# from django.contrib.auth.decorators import login_required
# from django.utils.decorators import method_decorator
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View, TemplateView
# Create your views here.

class CharliResumeView(TemplateView):
    template_name = 'charli-resume.html'


class HomeView(View):

    def get(self, request):
        if self.request.user.is_authenticated:
            return render(request, 'charliprofile/resume.html')
        else:
            return render(request, 'charli-resume.html')


# @method_decorator(login_required, name='dispatch')
class ResumeView(LoginRequiredMixin, TemplateView):
    template_name = 'resume.html'
