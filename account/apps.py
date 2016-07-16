# -*- coding: utf-8 -*- 
from importlib import import_module

from django.apps import AppConfig as BaseAppConfig


class AppConfig(BaseAppConfig):

    name = "account"
    verbose_name = "Acessos"

    def ready(self):
        import_module("maaxcam.receivers")
