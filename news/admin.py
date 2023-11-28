from django.contrib import admin
from .models import News

# Модель новости
class NewsAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'text', 'image', 'title', 'description', 'keywords']
    prepopulated_fields = {'slug': ('name', )}

admin.site.register(News, NewsAdmin)