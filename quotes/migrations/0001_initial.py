# Generated by Django 4.1.2 on 2022-10-27 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=100, verbose_name='Autor')),
                ('quote', models.TextField(max_length=255, verbose_name='Cita')),
                ('reference', models.CharField(max_length=155, verbose_name='Fuente')),
                ('context', models.TextField(max_length=255, verbose_name='Contexto')),
            ],
        ),
    ]
