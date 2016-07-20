# -*- coding: utf-8 -*- 
from django.shortcuts import render
from account.mixins import LoginRequiredMixin
from django.http import Http404, HttpResponseForbidden
from django.shortcuts import redirect, get_object_or_404
from django.utils.http import base36_to_int, int_to_base36
from django.core.urlresolvers import reverse
from django.utils.translation import ugettext_lazy as _
from django.views.generic.base import TemplateResponseMixin, View
from django.views.generic.edit import FormView, UpdateView
from django.contrib import auth, messages
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth.tokens import default_token_generator

from account.models import Account
from gerencial.models import Assinatura, Fatura, Plano


# Create your views here.
class FaturasView(LoginRequiredMixin, View):
    template_name = "account/faturas.html"
    messages = {
        "assinaturas_empty": {
            "level": messages.INFO,
            "text": _("Você não possui assinaturas válidas até o momento. Fale conosco!.")
        },

    }

    def get(self, request):
        account = Account.objects.get(user = request.user)
        assinaturas = Assinatura.objects.filter(cliente = account)
        
        if not assinaturas.exists():
            messages.add_message(
                self.request,
                self.messages["assinaturas_empty"]["level"],
                self.messages["assinaturas_empty"]["text"]
            )
        return render(request, self.template_name, {'assinaturas': assinaturas}) 

# from django.forms import ModelForm        
# class AceiteForm(ModelForm):
#     class Meta:
#         model = Assinatura
#         fields = ['aceite',]
from django import forms

class AceiteForm(forms.Form):
    id = forms.HiddenInput()
    aceite = forms.BooleanField()
    
#     class Meta:
#         model=Assinatura
#         fields = ['id', 'cliente', 'plano', 'aceite']


def atualiza_aceita(request):
    
    account = Account.objects.get(user = request.user)
    assinaturas = Assinatura.objects.filter(cliente = account)
          
    if not assinaturas.exists():
        messages.add_message(
            self.request,
            self.messages["assinaturas_empty"]["level"],
            self.messages["assinaturas_empty"]["text"]
        )
     
    form = AceiteForm
    
    if request.method == 'POST':
        form = AceiteForm(request.POST)
#         print(form)
        if form.cleaned_data.get("aceite"):
            assinatura = assinaturas[0]
            assinatura.update(aceita=True)
            messages.add_message(
            request,
            messages.SUCCESS,
            'Contrato atualizado.'
            )
        else:
            messages.add_message(
            request,
            messages.ERROR,
            'Erro ao atualizar.'
            )
#         if form.is_valid():
#             form.save()
#         else:
#             messages.add_message(
#             request,
#             messages.ERROR,
#             'Erro ao atualizar.'
#             )
            # do something.
    else:
        form = AceiteForm() #{'id': a.id,'cliente': a.cliente,'plano': a.plano, 'aceite': a.aceite}
    return render(request, "account/planos.html", {'assinaturas': assinaturas, 'form': form}) 






# class PlanosView(FormView):
#     template_name = "account/planos.html"
#     form_class = AceiteForm
#     success_url = '/restrito/'
# #     success_url = reverse_lazy('vista_validador')
# 
#     messages = {
#         "assinaturas_empty": {
#             "level": messages.INFO,
#             "text": _("Você não possui assinaturas válidas até o momento. Fale conosco!.")
#         },
# 
#     }
#     
#     def get_initial(self):
#         initial = super(PlanosViewView, self).get_initial()
#         if self.primary_email_address:
#             initial["email"] = self.primary_email_address.email
#         initial["timezone"] = self.request.user.account.timezone
#         initial["language"] = self.request.user.account.language
#         return initial
#     
#     def form_valid(self, form):
#         # This method is called when valid form data has been POSTed.
#         # It should return an HttpResponse.
# #         form.send_email()
#         id = form.cleaned_data["id"]
#         aceite = form.cleaned_data["aceite"]
#         a = Assinatura.object.get(pk = id)
#         a.update(aceite=True)
# #         form.save()
#         messages.add_message(
#                 self.request,
#                 messages.INFO,
#                 'Plano atualizado com sucesso'
#             )
#         
#         return super(PlanosView, self).form_valid(form)
# 
#     def get(self, request):
#         account = Account.objects.get(user = request.user)
#         assinaturas = Assinatura.objects.filter(cliente = account)
#          
#         if not assinaturas.exists():
#             messages.add_message(
#                 self.request,
#                 self.messages["assinaturas_empty"]["level"],
#                 self.messages["assinaturas_empty"]["text"]
#             )
#         
#         form = AceiteForm
#         return render(request, self.template_name, {'assinaturas': assinaturas, 'form': form}) 
