from django.shortcuts import render, redirect
from .models import Gallery, Chef
from .forms import ContactForm
from django.contrib import messages

def index(request):
    galleries = Gallery.objects.all()
    chefs = Chef.objects.all()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been successfully sent.')
            return redirect('index')
        else:
            messages.error(request, 'Please check the fields.')
    context = {
        'galleries' : galleries,
        'chefs' : chefs,
    }
    return render(request, 'index.html',  context)