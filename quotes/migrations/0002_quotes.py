from django.db import migrations

def create_data(apps, schema_editor):
    Quote = apps.get_model('quotes', 'Quote')
    Quote(author='Séneca', quote='"No es el hombre que tiene demasiado poco, sino el hombre que anhela más, el que es pobre".', reference='Carta II: Sobre la discursividad en la lectura Línea 6', context='Non qui parum habet, sed qui plus cupit, pauper est.').save()
    
    Quote = apps.get_model('quotes', 'Quote')
    Quote(author='Zénon de Citio', quote='"Ninguna pérdida debe sernos más sensible que la del tiempo, puesto que es irreparable".', reference='https://akifrases.com/frase/134878', context='El tiempo es lo único que nunca vamos a recuperar.').save()

class Migration(migrations.Migration):

    dependencies = [
        ('quotes', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
