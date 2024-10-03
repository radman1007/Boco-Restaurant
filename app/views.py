from django.shortcuts import render, redirect
from .models import Gallery
from .forms import ContactForm

def index(request):
    galleries = Gallery.objects.all()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    context = {
        'galleries' : galleries,
    }
    return render(request, 'index.html',  context)