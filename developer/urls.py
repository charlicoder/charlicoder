from django.urls import path

from developer.views import HomeView, ResumeView, CharliResumeView, home

urlpatterns = [
    path('', home, name="home"),
    # path('charli-resume/', CharliResumeView.as_view(), name="charli-resume"),
    path('resume/', ResumeView.as_view(), name="resume"),
]
