from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("login",views.login,name="login"),
    path("change_username",views.change_username,name="change_username"),
    path("signup",views.signup,name="signup"),
    path("Aboutus",views.Aboutus,name="Aboutus"),
    path("contact",views.contact,name="contact"),
    path('logout',views.logout,name='logout'),
    path('getClickSuid',views.getClickSuid,name='getClickSuid'),
    # path('getVillageData',views.getVillageData,name='getVillageData'),
    path('showRevelo',views.showRevelo,name='showRevelo'),
]