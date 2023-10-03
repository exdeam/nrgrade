# Generated by Django 4.2.4 on 2023-08-04 10:40

from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=200, verbose_name='Название')),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('images', models.ImageField(blank=True, upload_to='category/%Y/%m/%d/', verbose_name='Изображение Категории')),
                ('lft', models.PositiveIntegerField(editable=False)),
                ('rght', models.PositiveIntegerField(editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(editable=False)),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='children', to='nrgrade.category', verbose_name='Родительская категория')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
                'unique_together': {('parent', 'slug')},
            },
        ),
        migrations.CreateModel(
            name='Moneta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=200, verbose_name='Название')),
                ('slug', models.SlugField(max_length=200)),
                ('cert', models.CharField(db_index=True, max_length=100, verbose_name='Сертификат')),
                ('datecert', models.DateTimeField(auto_now_add=True, verbose_name='Создан')),
                ('year', models.PositiveIntegerField(verbose_name='Год')),
                ('safety', models.CharField(max_length=100, verbose_name='Сохранность')),
                ('quantity', models.IntegerField(verbose_name='Количество')),
                ('images', models.ImageField(blank=True, upload_to='category/%Y/%m/%d/', verbose_name='Изображение Монеты')),
                ('category', mptt.fields.TreeForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='moneta', to='nrgrade.category', verbose_name='Категория')),
            ],
            options={
                'verbose_name': 'Монета',
                'verbose_name_plural': 'Монеты',
                'ordering': ['slug'],
                'index_together': {('id', 'slug')},
            },
        ),
    ]
