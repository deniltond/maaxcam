from __future__ import unicode_literals

import datetime
import operator
from django.conf import settings
import uuid
from account.models import Account

try:
    from urllib.parse import urlencode
except ImportError:  # python 2
    from urllib import urlencode

from django.core.urlresolvers import reverse
from django.db import models, transaction

class Plano(models.Model):
    nome = models.CharField(max_length=220, verbose_name=u"Plano", help_text="Nome do Plano")
    descricao = models.TextField(null=True, blank=True)
    valor = models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=10)
    
    def __unicode__(self):
        return ('%s') %(self.nome)



# class Cliente(models.Model):
#     #ID eh CEP+NUMERO
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     usuario = models.OneToOneField(Account, related_name="usuario_cliente", verbose_name="usuario", blank=True, null=True)
#     nome = models.CharField(max_length=220, verbose_name=u"Nome", help_text="Nome do Cliente")
#     cpf = models.CharField(max_length=200, verbose_name=u"CPF", blank=True, null=True)
#     telefone = models.CharField(max_length=200, verbose_name=u"Fone", null=True, blank=True)
#     cep=models.IntegerField(verbose_name=u"CEP", null=True, blank=True)
#     logradouro=models.CharField(max_length=200, verbose_name=u"Logradouro", null=True, blank=True, help_text="Nome da rua, avenida, etc.")
#     complemento=models.CharField(max_length=200, verbose_name=u"Complemento", null=True, blank=True)
#     bairro=models.CharField(max_length=200, verbose_name=u"Bairro", null=True, blank=True)
#     cidade=models.CharField(max_length=200, verbose_name=u"Cidade", null=True, blank=True)
#     estado=models.CharField(max_length=2, verbose_name=u"Estado", null=True, blank=True)
#     
#     def __unicode__(self):
#         return ('%s') %(self.nome)
    
class Dependente(models.Model):
    #ID eh CEP+NUMERO
    cliente = models.ForeignKey(Account)
    nome = models.CharField(max_length=220, verbose_name=u"Dependente", help_text="Nome do Dependente")
    telefone = models.CharField(max_length=200, verbose_name=u"Fone", null=True, blank=True)

    
    def __unicode__(self):
        return ('%s') %(self.nome)
    
class Indicacao(models.Model):
    #ID eh CEP+NUMERO
    cliente = models.ForeignKey(Account)
    nome = models.CharField(max_length=220, verbose_name=u"Indicado", help_text="Nome do Indicado")
    telefone = models.CharField(max_length=200, verbose_name=u"Fone", null=True, blank=True)

    
    def __unicode__(self):
        return ('%s') %(self.nome)

class Assinatura(models.Model):
    #ID eh CEP+NUMERO
    cliente = models.ForeignKey(Account)
    plano = models.ForeignKey(Plano)
    obs = models.TextField(null=True, blank=True)
    contrato = models.FileField(null=True, blank=True)
    termo_utilizacao = models.TextField(null=True, blank=True)
    aceite = models.BooleanField(default=False)

#     nome = models.CharField(max_length=220, verbose_name=u"Plano", help_text="Nome do Plano")
    
    def get_faturas(self, request):
        return self.set_faturas_all()
    
    def __unicode__(self):
        return ('%s') %(self.cliente.nome)

# FATURA_STATUS = (
#                   (1,u'Em Aberto'),
#                   (2,u'Paga'),
# )
from datetime import date
class Fatura(models.Model):
    assinatura = models.ForeignKey(Assinatura, blank=True, null=True)
    mes = models.IntegerField(blank=True, null=True)
    ano = models.IntegerField(blank=True, null=True)
    data_vencimento = models.DateField(blank=True, null=True)
    valor = models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=10)
#     status = models.IntegerField(choices=FATURA_STATUS, verbose_name = u"Status da fatura", null=False, blank=False, default=1)
    status = models.BooleanField(verbose_name = "Pago")
    
    def cliente(self):
        return self.assinatura.cliente
    
    @property
    def is_vencido(self):
        if date.today() > self.data_vencimento:
            return True
        return False    
    
    def __unicode__(self):
        return ('%s') %(self.assinatura.cliente.nome)
    
PROSPECT_FONTE = (
                  (1,u'Newsletter'),
                  (2,u'Experimente'),
)

PROSPECT_CATEGORIA = (
                  (1,u'Compartilhado'),
                  (2,u'Camera IP'),
)

PROSPECT_INTERESSE = (
                  (1,u'Compartilhado'),
                  (2,u'Camera IP'),
)

class Prospect(models.Model):
    #ID eh CEP+NUMERO
    nome = models.CharField(max_length=220, verbose_name=u"Plano", help_text="Nome do Plano")
    fonte = models.IntegerField(choices=PROSPECT_FONTE, verbose_name = u"Fonte do Prospect", null=False, blank=False, default=1)
    categoria = models.IntegerField(choices=PROSPECT_INTERESSE, verbose_name = u"Categoria do Prospect", null=False, blank=False, default=1)
    interesse = models.IntegerField(choices=PROSPECT_INTERESSE, verbose_name = u"Interesse do Prospect", null=False, blank=False, default=1)

        
    def __unicode__(self):
        return ('%s') %(self.nome)
    