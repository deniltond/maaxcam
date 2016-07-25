# -*- coding: utf-8 -*- 
from django.contrib import admin
from models import *


class PlanoAdmin(admin.ModelAdmin):
    list_display = ('nome','valor', )
    search_fields = ('nome', 'descricao',)  
    list_filter = ('valor',)

class AssinaturaAdmin(admin.ModelAdmin):
    list_display = ('cliente','plano', 'aceite',)
    search_fields = ('cliente__nome',)  
    list_filter = ('aceite',)
    
class FaturaAdmin(admin.ModelAdmin):
    list_display = ('assinatura','mes', 'ano','data_vencimento','valor', 'status')
    search_fields = ('assinatura__cliente__nome',)  
    list_filter = ('status',)

class ProspectAdmin(admin.ModelAdmin):
    list_display = ('nome','fonte', 'categoria','interesse','telefone', 'bairro', 'cidade')
    search_fields = ('nome',)  
    list_filter = ('categoria','fonte', 'interesse')
    
class IndicacaoAdmin(admin.ModelAdmin):
    list_display = ('cliente','nome','telefone' )
    search_fields = ('cliente__nome', 'nome',)  

class DependenteAdmin(admin.ModelAdmin):
    list_display = ('cliente','nome','telefone' )
    search_fields = ('cliente__nome', 'nome',) 

admin.site.register(Cliente)
admin.site.register(Dependente, DependenteAdmin)
admin.site.register(Indicacao, IndicacaoAdmin)
admin.site.register(Plano, PlanoAdmin)
admin.site.register(Assinatura, AssinaturaAdmin)
admin.site.register(Fatura, FaturaAdmin)
admin.site.register(Prospect, ProspectAdmin)