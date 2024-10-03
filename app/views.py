from django.shortcuts import render, redirect
from .models import Gallery, Chef
from .forms import ContactForm , ReservationForm
from django.contrib import messages

def index(request):
    galleries = Gallery.objects.all()
    chefs = Chef.objects.all()
    if request.method == 'GET':
        reserve_form = ReservationForm(request.GET)
        if reserve_form.is_valid():
            reserve_form.save()
            messages.success(request, 'Your table has been successfully reserved.')
            return redirect('index')
        else:
            messages.error(request, 'Please check the fields.')
    if request.method == 'POST':
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            contact_form.save()
            messages.success(request, 'Your message has been successfully sent.')
            return redirect('index')
        else:
            messages.error(request, 'Please check the fields.')
    context = {
        'galleries' : galleries,
        'chefs' : chefs,
    }
    return render(request, 'index.html',  context)