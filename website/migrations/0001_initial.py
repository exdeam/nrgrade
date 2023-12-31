# Generated by Django 4.2.5 on 2023-10-30 16:58

from django.db import migrations, models
import django.db.models.deletion
import django_ckeditor_5.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Название')),
                ('slug', models.SlugField(max_length=200)),
                ('sort', models.IntegerField(blank=True, verbose_name='Порядок')),
            ],
            options={
                'verbose_name': 'Меню сайта',
                'verbose_name_plural': 'Меню сайта',
                'ordering': ['sort', 'id'],
                'index_together': {('id', 'slug')},
            },
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=200, verbose_name='Название')),
                ('slug', models.SlugField(max_length=200)),
                ('text', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Текст страницы')),
                ('title', models.CharField(blank=True, max_length=300, verbose_name='Заголовок')),
                ('description', models.CharField(blank=True, max_length=500, verbose_name='Описание')),
                ('keywords', models.CharField(blank=True, max_length=300, verbose_name='Ключи')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='pages', to='website.menu', verbose_name='Категории Меню')),
            ],
            options={
                'verbose_name': 'Страница',
                'verbose_name_plural': 'Страницы',
                'index_together': {('id', 'slug')},
            },
        ),
    ]
