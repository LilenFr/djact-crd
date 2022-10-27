from django.db import models

class Quote(models.Model):
    author = models.CharField('Autor', max_length=100)
    quote = models.TextField('Cita', max_length=255)
    reference = models.CharField('Fuente', max_length=155)
    context = models.TextField('Contexto', max_length=255)

    def __str__(self):
        return self.author
