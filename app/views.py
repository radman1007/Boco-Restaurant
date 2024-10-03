from django.shortcuts import render
from .models import Gallery

def index(request):
    galleries = Gallery.objects.all()
    context = {
        'galleries' : galleries
    }
    return render(request, 'index.html',  context)