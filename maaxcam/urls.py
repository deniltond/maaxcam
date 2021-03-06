from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.views.generic import TemplateView

from django.contrib import admin

from account.views import RestrictView, contato_form, experimente_form, newsletter_form


urlpatterns = [
#     url(r"^$", TemplateView.as_view(template_name="homepage.html"), name="home"),
    url(r"^$", TemplateView.as_view(template_name="front/index.html"), name="home"),
    url(r"^restrito/", RestrictView.as_view(), name="home_back"),
    url(r"^admin/", include(admin.site.urls)),
    url(r"^account/", include("account.urls")),
    url(r"^gerencial/", include("gerencial.urls")),
    url(r"^contato_form/", contato_form, name="contato_form"),
    url(r"^newsletter_form/", newsletter_form, name="newsletter_form"),
    url(r"^experimente_form/", experimente_form, name="experimente_form"),
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# from . import settings
# admin.site.site_header = settings.ADMIN_SITE_HEADER