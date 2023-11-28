from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

# Модель категории сайта
class Menu(models.Model):
    name = models.CharField(max_length=200, verbose_name='Название')
    slug = models.SlugField(max_length=200, db_index=True)
    sort = models.IntegerField(verbose_name="Порядок", blank=True)

    class Meta:
        ordering = ['sort', 'id']
        index_together = [
            ['id', 'slug']
        ]
        verbose_name = 'Меню сайта'
        verbose_name_plural = 'Меню сайта'
    
    def __str__(self):
        return self.name
    
# Модель страницы
class Page(models.Model):
    category = models.ForeignKey(Menu, on_delete=models.PROTECT, related_name='pages', verbose_name='Категории Меню')
    name = models.CharField(max_length=200, db_index=True, verbose_name="Название")
    slug = models.SlugField(max_length=200, db_index=True)
    text = CKEditor5Field(verbose_name='Текст страницы', config_name='extends')
    title = models.CharField(max_length=300, verbose_name="Заголовок", blank=True)
    description = models.CharField(max_length=500, verbose_name="Описание", blank=True)
    keywords = models.CharField(max_length=300, verbose_name="Ключи", blank=True)
    
    class Meta:
        index_together = [
            ['id', 'slug']
        ]
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'

    def __str__(self):
        return self.name