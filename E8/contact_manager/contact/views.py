from django.shortcuts import get_object_or_404, render

# Create your views here.
from django.http import HttpResponse
from .models import Person

from django.template import loader

from .forms import edit_person_form,add_person_form
from django.http import HttpResponseRedirect
from django.urls import reverse

# from . import models
# from . import forms

# from django.http import Http404
# def index(request):
#     return HttpResponse("Hello, world. You're at the contact index.")

# def index(request):
#     latest_person_list = Person.objects.order_by('first_name')[:5]
#     output = ', '.join([p.first_name for p in latest_person_list])
#     return HttpResponse(output)

def index(request):
    # latest_person_list = Person.objects.order_by('first_name')[:5]
    latest_person_list = Person.objects.order_by('first_name')

    # template = loader.get_template('contact/index.html')
    context = {
        'latest_person_list': latest_person_list,
    }
    # return HttpResponse(template.render(context, request))
    return render(request, 'contact/index.html', context)


def detail(request, person_id): 
    person = get_object_or_404(Person,pk=person_id) 
    return render(request, 'contact/detail.html',{'person':person})
 
 

def edit(request, person_id):
    person = get_object_or_404(Person, pk=person_id)
    edit_form = edit_person_form;
    if request.method != 'POST':
        form = edit_form(initial={'first_name': person.first_name, 'last_name': person.last_name,'email': person.email,'phone_number': person.phone_number,'notes': person.notes,}) 
    else:
        form = edit_form(data=request.POST)
        message = 'Please Check!'
        if form.is_valid():
            person.first_name = form.cleaned_data.get('first_name')
            person.last_name = form.cleaned_data.get('last_name')
            person.email = form.cleaned_data.get('email')
            person.phone_number = form.cleaned_data.get('phone_number')
            person.notes = form.cleaned_data.get('notes')
            person.save();
            return HttpResponseRedirect(reverse('contact:detail', args=(person.id,)))
 
    return render(request, 'contact/edit.html', {'form':form,'person':person})


def add(request):
    # person = get_object_or_404(Person, pk=person_id)
    add_form = add_person_form;
    if request.method != 'POST':
    # it not post,create a form
        form = add_form() 
    else:
    # if it is post, data=request.POST to get the data inside the form
        form = add_form(data=request.POST)
        message = 'Please Check!'
        if form.is_valid():
            # form.save(); 
            Person.objects.create(first_name=form.cleaned_data.get('first_name'), last_name=form.cleaned_data.get('last_name'),email = form.cleaned_data.get('email'), phone_number=form.cleaned_data.get('phone_number'),notes=form.cleaned_data.get('notes'))
            return HttpResponseRedirect(reverse('contact:index'))
 
    return render(request, 'contact/add.html', {'form':form})

  



  


















