# Generated by Django 4.2.4 on 2023-08-05 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nrgrade', '0003_alter_moneta_category'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='category',
            unique_together=set(),
        ),
        migrations.AlterField(
            model_name='category',
            name='slug',
            field=models.SlugField(max_length=200),
        ),
    ]
