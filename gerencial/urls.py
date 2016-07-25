from __future__ import unicode_literals

from django.conf.urls import url

from gerencial.views import FaturasView, atualiza_aceita, manage_cliente, manage_dependentes, manage_indicacoes
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r"^dados_cadastrais/", manage_cliente, name="cliente_view"),
    url(r"^faturas/", FaturasView.as_view(), name="faturas_view"),  
    url(r"^suporte/", TemplateView.as_view(template_name="account/suporte.html"), name="suporte_view"),
    url(r"^planos/", atualiza_aceita, name="planos_view"),
    url(r'manage_dependentes/', manage_dependentes, name='manage_dependentes_view'),
    url(r'manage_indicacoes/', manage_indicacoes, name='manage_indicacoes_view'),
#     url(r"^planos/(?P<plano_id>[0-9]+)/$'", atualiza_aceita, name="planos_view"),
    
]
