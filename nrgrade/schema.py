import graphene
from graphene_django import DjangoObjectType
from graphene_django.converter import convert_django_field

from .models import Moneta, Category
from website.models import Menu,  Page
from news.models import News

sohran = ( 'MS70', 'MS69', 'MS68', 'MS67', 'MS66', 'MS65', 'MS64', 'MS63', 'MS62',
           'MS61', 'MS60', 'AU58', 'AU55', 'AU53', 'AU50', 'XF45', 'XF40', 'VF35',
             'VF30', 'VF25', 'VF20', 'F15', 'F12', 'VG10', 'VG8', 'G6', 'G4', 'AG3', 'F2', 'P1' )


class MonetaType(DjangoObjectType):
    class Meta:
        model = Moneta
        fields = ('id', 'name', 'safety', 'slug', 'category', 'images', 'qr_code', 'cert')

           
class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'images', 'years')

class MenuType(DjangoObjectType):
    class Meta:
        model = Menu
        fields = ('id', 'name', 'slug')

class PageType(DjangoObjectType):
    class Meta:
        model = Page
        fields = ('id', 'name', 'slug', 'text', 'category', 'title', 'description', 'keywords')
            
class Mycount(graphene.ObjectType):
    text = graphene.String()

class AllCount(graphene.ObjectType):
    count = graphene.String()

class MonetsInfo(graphene.ObjectType):
    info = graphene.JSONString()

class Query(graphene.ObjectType):
    all_Monets = graphene.List(MonetaType, id=graphene.ID(required=True))
    count = graphene.Field(Mycount, id=graphene.ID(required=True))
    all_count = graphene.Field(AllCount, id=graphene.ID(required=True))
    monets_info = graphene.Field(MonetsInfo, id=graphene.ID(required=True))
    current_Monet_byid = graphene.List(MonetaType, id=graphene.ID(required=True))
    current_Monet_bycert = graphene.List(MonetaType, cert=graphene.String(required=True))
    children_of_Category = graphene.List(CategoryType, id=graphene.ID(required=True))
    prev_of_Category = graphene.List(CategoryType, id=graphene.ID(required=True))
    root_of_Category = graphene.List(CategoryType)
    second_of_Category = graphene.List(CategoryType, slug=graphene.String(required=True))
    current_Category_byid = graphene.List(CategoryType, id=graphene.ID(required=True))
    current_Category_byslug = graphene.List(CategoryType, slug=graphene.String(required=True))
    all_Menu = graphene.List(MenuType)
    all_Page_bycat = graphene.List(PageType, id=graphene.ID(required=True))
    cur_Page = graphene.List(PageType, slug=graphene.String(required=True))

    def resolve_all_Menu(root, info):
        return Menu.objects.all()
    
    def resolve_cur_Page(root, info, slug):        
        return Page.objects.all().filter(slug=slug)
    
    def resolve_all_Page_bycat(root, info, id):        
        return Page.objects.filter(category__id=id)

    def resolve_count(root, info, id):        
        res = Moneta.objects.filter(category__id=id).count()
        return Mycount(text=res)
    
    def resolve_all_count(root, info, id):
        res = 0
        
        if Moneta.objects.filter(category__id=id).count() != 0:
            res = res + Moneta.objects.filter(category__id=id).count()
        else:
            for i in Category.objects.get(id=id).get_children():
                res = res + Moneta.objects.filter(category__id=i.id).count()
        return AllCount(count = res)          

    def resolve_monets_info(root, info, id): 
        val = {}
        for i in sohran:
            if Moneta.objects.filter(category__id=id).filter(safety=i).count() != 0:
                val.update({i: Moneta.objects.filter(category__id=id).filter(safety=i).count()})
        return MonetsInfo(info = val)

    def resolve_all_Monets(root, info, id):        
        return Moneta.objects.filter(category__id=id)
    
    def resolve_current_Category_byid(root, info, id):        
        return Category.objects.all().filter(id=id)
    
    def resolve_current_Category_byslug(root, info, slug):        
        return Category.objects.all().filter(slug=slug)
    
    def resolve_children_of_Category(root, info, id):
        return Category.objects.get(id=id).get_children()
    
    def resolve_prev_of_Category(root, info, id):
        return Category.objects.get(id=id).get_ancestors().filter(level=1)
    
    def resolve_root_of_Category(root, info):
        return Category.objects.filter(level=0)
    
    def resolve_second_of_Category(root, info, slug):
        return Category.objects.get(slug=slug).get_children()
    
    def resolve_current_Monet_byid(root, info, id):        
        return Moneta.objects.all().filter(id=id)
    def resolve_current_Monet_bycert(root, info, cert):        
        return Moneta.objects.all().filter(cert=cert)


schema = graphene.Schema(query=Query)
