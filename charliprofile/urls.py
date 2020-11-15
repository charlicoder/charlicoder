from django.urls import path

from charliprofile.views import HomeView, ResumeView, CharliResumeView

urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    # path('charli-resume/', CharliResumeView.as_view(), name="charli-resume"),
    path('resume/', ResumeView.as_view(), name="resume"),
]
