from django.contrib import admin
from .models import Menu, Page

# Модель категории сайта
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'sort']
    prepopulated_fields = {'slug': ('name', )}

# Модель страницы
class PageAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'text', 'category', 'title', 'description', 'keywords']
    list_filter = ('category',)
    prepopulated_fields = {'slug': ('name', )}

admin.site.register(Menu, MenuAdmin)
admin.site.register(Page, PageAdmin)
