from django.contrib import admin
from .models import Reservation, Chef

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'meal', 'number_of_people')
    ordering = ('-date',)


@admin.register(Chef)
class ChefAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')