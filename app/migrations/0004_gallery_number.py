# Generated by Django 5.0.6 on 2024-10-03 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_gallery'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='number',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
    ]
