# -*- coding: utf-8 -*- 
from __future__ import unicode_literals

import re

try:
    from collections import OrderedDict
except ImportError:
    OrderedDict = None

from django import forms
from django.utils.translation import ugettext_lazy as _

from django.contrib import auth
from django.contrib.auth import get_user_model

from account.conf import settings
from account.hooks import hookset
from account.models import EmailAddress, Account
from account.utils import get_user_lookup_kwargs

from gerencial.models import Cliente
from fields import BRCPFField, BRPhoneNumberField, BRZipCodeField, BRStateChoiceField


alnum_re = re.compile(r"^\w+$")

class ClienteModelForm(forms.ModelForm):

    class Meta:
        model = Cliente
        exclude = ['email',]
#         fields = ['nome', 'cpf', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'cidade', 'estado']
        
class ClienteForm(forms.Form):

#     class Meta:
#         model = Account
#         fields = ['email', 'nome', 'cpf', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'cidade', 'estado']

#     email = forms.EmailField(label=_("Email"), required=True)
#     id = forms.IntegerField(label=_("id"), required=True)
    nome = forms.CharField(label=_("Nome"), required=True)
    cpf = BRCPFField(label=_("CPF"), required=False)
    telefone = BRPhoneNumberField(label=_("Telefone"), required=False)
    cep = BRZipCodeField(label=_("CEP"), required=True)
    cidade = forms.CharField(label=_("Cidade"), required=True)
    estado = BRStateChoiceField(label=_("Estado"), required=False)
 
#     timezone = forms.ChoiceField(
#         label=_("Timezone"),
#         choices=[("", "---------")] + settings.ACCOUNT_TIMEZONES,
#         required=False
#     )
#     if settings.USE_I18N:
#         language = forms.ChoiceField(
#             label=_("Language"),
#             choices=settings.ACCOUNT_LANGUAGES,
#             required=False
#         )

    def clean_email(self):
        value = self.cleaned_data["email"]
        if self.initial.get("email") == value:
            return value
        qs = EmailAddress.objects.filter(email__iexact=value)
        if not qs.exists() or not settings.ACCOUNT_EMAIL_UNIQUE:
            return value
        raise forms.ValidationError(_("A user is registered with this email address."))


#     def clean_cidade(self):
#         value = self.cleaned_data["cidade"]
#         if self.initial.get("cidade") == value:
#             return value
# #         qs = EmailAddress.objects.filter(email__iexact=value)
# #         if not qs.exists() or not settings.ACCOUNT_EMAIL_UNIQUE:
# #             return value
#         raise forms.ValidationError(_("Erro de validação na cidade."))
