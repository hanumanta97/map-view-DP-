from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.shortcuts import render
from .models import Signup,Contact
from django.views.decorators.csrf import csrf_protect
from django.template import loader
from django.contrib import messages
from django.contrib.auth import authenticate
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.http import JsonResponse
import requests as serveRequests
from django.views.decorators.csrf import csrf_exempt, csrf_protect
import json,io,csv
import requests
@csrf_protect
def login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if Signup.objects.using("SIGNUP").filter(username=username,password=password).exists()== False:
            template = loader.get_template("login.html")
            context = {"user":""}
            messages.error(request, "INVALID USERNAME AND PASSWORD")
            return HttpResponse(template.render(context,request))
        if Signup.objects.using("SIGNUP").filter(username=username).exists():
            user = Signup.objects.using("SIGNUP").filter(username=username,password=password).values_list("username","password")
            x = list(user)
            if user is not None:
                if x[0][1] != password:
                    template = loader.get_template("login.html")
                    context = {"user":""}
                    messages.error(request, "INVALID USERNAME AND PASSWORD")
                    return HttpResponse(template.render(context,request))
                elif x[0][0] == username:
                    if x[0][1] == password:
                        template = loader.get_template("new.html")
                        context = {"user":username}
                        return HttpResponse(template.render(context,request))
    return render(request,'login.html')

@csrf_protect
def signup(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        mobile = request.POST.get("mobile")
        email = request.POST.get("email")
        username = request.POST.get("username")
        password = request.POST.get("password")
        if Signup.objects.using("SIGNUP").filter(username=username).exists():
            template = loader.get_template("signup.html")
            context = {"user":""}
            messages.error(request, "Username already exists. Please choose another username.")
            return HttpResponse(template.render(context,request))
        elif (Signup.objects.using("SIGNUP").create(firstname=first_name,lastname=last_name,mobileno=mobile,email=email,username=username,password=password)):
            template = loader.get_template("new.html")
            context = {"user":""}
            return HttpResponse(template.render(context,request)) 
    return render(request,'signup.html')

def home(request):
    user = request.user if request.user.is_authenticated else None
    # return render(request, 'new.html', {'user': user})
    return render(request, 'revelo.html', {'user': user})

def showRevelo(request):
    return render(request,'new.html')

def Aboutus(request):
    return render(request,'about.html')

def change_username(request):
    return render(request,'change_username.html')

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        Contact.objects.using("SIGNUP").create(name=name,email=email,message=message)
        template = loader.get_template("new.html")
        context = {"user":""}
        return HttpResponse(template.render(context,request))
    return render(request, 'contact.html')

def logout(request):
    request.session.clear()
    auth_logout(request)
    request.session.flush()   
    return redirect('home') 

url = "http://127.0.0.1:8910"
@csrf_exempt
def getClickSuid(request):
    if request.method == "POST":
       new_req = request.body
       if new_req.decode().count('geoserverURL=') >= 1:
        new_req_ = new_req.decode().split('geoserverURL=')[1]
        newsuidDataReq = serveRequests.get(url=new_req_.replace('/proxy/',''))
        newsuidDataResp = newsuidDataReq.content.decode()
        print(newsuidDataResp)
        print(json.loads(newsuidDataResp))
        if json.loads(newsuidDataResp)['numberReturned'] != 0:
            # print(json.loads(newsuidDataResp))
            # res_json_dict = json.loads(newsuidDataResp)
            # for i in res_json_dict.__iter__():
            #     print(i)
            # print(res_json_dict.items())
            # print(res_json_dict)
            suidExtract = json.loads(newsuidDataResp)['features'][0]['properties']['suid']
            suidExtract_Properties = json.loads(newsuidDataResp)['features'][0]['properties']
            return JsonResponse({'suid':suidExtract,'suidExtract_Properties':suidExtract_Properties})
        elif json.loads(newsuidDataResp)['numberReturned'] == 0 :
            return JsonResponse({'suid':'No Feature Found'})
        # return JsonResponse({'suid':'No Feature Found'})
        else:
            return JsonResponse({'suid':'No suid found'})
 
def excel_data(command): 
    data = {'command':command}
    print("Call")
    response = requests.get("http://103.121.74.84:1434/excel_export",params=data)
    print("end")
    if response.status_code == 200:
        data = response
        return data
    else:
        return HttpResponse("Error communicating with FastAPI", status=response.status_code)
    
def createDataList(Qset):
    RESDataList = []
    for q in Qset:
        RESDataList.append(list(q))
    return RESDataList       