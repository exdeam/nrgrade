from django.db import models
from django_ckeditor_5.fields import CKEditor5Field
  
# Модель новости
class News(models.Model):
    name = models.CharField(max_length=200, db_index=True, verbose_name="Название")
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='news/%Y/%m/%d/', blank=True, verbose_name="Картинка превью")
    text = CKEditor5Field(verbose_name='Текст новости', config_name='extends')
    title = models.CharField(max_length=300, verbose_name="Заголовок", blank=True)
    description = models.CharField(max_length=500, verbose_name="Описание", blank=True)
    keywords = models.CharField(max_length=300, verbose_name="Ключи", blank=True)
    
    class Meta:
        index_together = [
            ['id', 'slug']
        ]
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.name