from __future__ import unicode_literals

from django.conf.urls import url

from account.views import SignupView, LoginView, LogoutView, DeleteView
from account.views import ConfirmEmailView
from account.views import ChangePasswordView, PasswordResetView, PasswordResetTokenView
from account.views import SettingsView #, ClienteView, ClienteModelView, manage_cliente, dependentes, manage_dependentes, manage_indicacoes


urlpatterns = [
    url(r"^signup/$", SignupView.as_view(), name="account_signup"),
    url(r"^login/$", LoginView.as_view(), name="account_login"),
    url(r"^logout/$", LogoutView.as_view(), name="account_logout"),
    url(r"^confirm_email/(?P<key>\w+)/$", ConfirmEmailView.as_view(), name="account_confirm_email"),
    url(r"^password/$", ChangePasswordView.as_view(), name="account_password"),
    url(r"^password/reset/$", PasswordResetView.as_view(), name="account_password_reset"),
    url(r"^password/reset/(?P<uidb36>[0-9A-Za-z]+)-(?P<token>.+)/$", PasswordResetTokenView.as_view(), name="account_password_reset_token"),
    url(r"^settings/$", SettingsView.as_view(), name="account_settings"),
    url(r"^delete/$", DeleteView.as_view(), name="account_delete"),
    
#     url(r'dados_cadastrais/', ClienteView.as_view(), name='cliente_view'),
#     url(r'dependentes/', dependentes, name='dependentes_view'),
#     url(r'manage_dependentes/', manage_dependentes, name='manage_dependentes_view'),
#     url(r'manage_indicacoes/', manage_indicacoes, name='manage_indicacoes_view'),

#     url(r'dados_cadastrais/(?P<pk>[0-9]+)/$', ClienteModelView.as_view(), name='cliente_view'),
#     url(r'account/(?P<pk>[0-9]+)/$', ClienteModelView.as_view(), name='cliente_view'),
#     url(r"^dados_cadastrais/", manage_cliente, name="cliente_view"),
]
