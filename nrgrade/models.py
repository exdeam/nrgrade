from django.db import models
from django.urls import reverse
from mptt.models import MPTTModel, TreeForeignKey
import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw

# Модель категории
class Category(MPTTModel):
    name = models.CharField(max_length=200, verbose_name='Название')
    parent = TreeForeignKey('self', on_delete=models.PROTECT, null=True, blank=True, related_name='children', db_index=True, verbose_name='Родительская категория')
    slug = models.SlugField(max_length=200, db_index=True)
    years = models.CharField(max_length=120, db_index=True, blank=True)
    is_active = models.BooleanField(default=True)
    images = models.ImageField(upload_to='category/%Y/%m/%d/', blank=True, verbose_name="Изображение Категории")
    
    class MPTTMeta:
        ordering = ['years']

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('nrgrade:category_list', args=[self.slug])
    

# Модель монеты
class Moneta(models.Model):
    category = TreeForeignKey('Category', on_delete=models.PROTECT, related_name='moneta', verbose_name='Категория')
    name = models.CharField(max_length=200, db_index=True, verbose_name="Название")
    slug = models.SlugField(max_length=200, db_index=True)
    cert = models.CharField(max_length=100, db_index=True, verbose_name="Сертификат")
    datecert = models.DateTimeField(auto_now_add=True, verbose_name='Создан')
    year = models.PositiveIntegerField(verbose_name="Год")
    safety = models.CharField(max_length=100, verbose_name="Сохранность")
    is_active = models.BooleanField(default=True)
    quantity = models.IntegerField(verbose_name="Количество")
    images = models.ImageField(upload_to='category/%Y/%m/%d/', blank=True, verbose_name="Изображение Монеты")
    qr_code = models.ImageField(upload_to='qr_code', blank=True)
    
    class Meta:
        ordering = ['slug']
        index_together = [
            ['id', 'slug']
        ]
        verbose_name = 'Монета'
        verbose_name_plural = 'Монеты'

    def __str__(self):
        return self.slug

    def save(self, *args, **kwargs):
        qrcode_img = qrcode.make(f'http://nrgrade.ru/moneta/{self.cert}')
        canvas = Image.new('RGB', (330, 330), 'white')
        draw = ImageDraw.Draw(canvas)
        canvas.paste(qrcode_img)
        fname = f'qr_code-{self.cert}.png'
        buffer = BytesIO()
        canvas.save(buffer, 'PNG')
        self.qr_code.save(fname, File(buffer), save=False)
        canvas.close()
        super().save(*args, **kwargs)
    
