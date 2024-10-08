from django.db import models

class Reservation(models.Model):
    CHOICES_BOX = {
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
        'Above 4 upto 10' : 'Above 4 upto 10',
    }
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=12)
    date = models.DateField()
    meal = models.CharField(max_length=11)
    number_of_people = models.CharField(max_length=20, choices=CHOICES_BOX)

    def __str__(self):
        return self.name


class Chef(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField()
    description = models.TextField()

    def __str__(self):
        return self.name


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name


class Gallery(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=100)
    text = models.TextField()
    number = models.CharField(max_length=20)

    def __str__(self):
        return self.title


class Menu(models.Model):
    CHOICES_BOX = {
        '1' : 'Appetizers',
        '2' : 'Entrées',
        '3' : 'Beverages',
        '4' : 'Desserts',
    }
    image = models.ImageField()
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.PositiveIntegerField()
    category = models.CharField(max_length=1, choices=CHOICES_BOX)