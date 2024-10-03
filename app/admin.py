from django.contrib import admin
from .models import Reservation, Chef, Contact, Gallery, Menu

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'meal', 'number_of_people')
    ordering = ('-date',)


@admin.register(Chef)
class ChefAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'message')


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'text')


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'category')
    ordering = ('category',)