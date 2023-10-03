from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin
from .models import Category, Moneta

# Модель категории
class CategoryAdmin(DjangoMpttAdmin):
    list_display = ['name', 'slug', 'images']
    prepopulated_fields = {'slug': ('name', )}

# Модель монеты
class MonetadAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'cert', 'datecert', 'year', 'safety', 'images', 'qr_code']
    prepopulated_fields = {'slug': ('name', )}


admin.site.register(Category, CategoryAdmin)
admin.site.register(Moneta, MonetadAdmin)
