from __future__ import unicode_literals

from django.conf.urls import url

from gerencial.views import FaturasView, atualiza_aceita 

urlpatterns = [
    url(r"^faturas/", FaturasView.as_view(), name="faturas_view"),
    url(r"^planos/", atualiza_aceita, name="planos_view"),
    
]
