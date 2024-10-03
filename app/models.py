from django.db import models

class Reservation(models.Model):
    CHOICES_BOX = {
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
        'ABOVE 4 UPTO 10' : 'Above 4 upto 10',
    }
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=12)
    date = models.DateField()
    meal = models.CharField(max_length=11)
    number_of_people = models.CharField(max_length=20, choices=CHOICES_BOX)
    
    def __str__(self):
        self.name
    
    
class Chef(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField()
    description = models.TextField()
    
    def __str__(self):
        return self.name