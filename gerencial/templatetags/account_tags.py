# from __future__ import unicode_literals
# 
# from django import template
# from django.template.base import kwarg_re
# from django.template.defaulttags import URLNode
# from django.utils.html import conditional_escape
# from django.utils.http import urlencode
# 
# from account.utils import user_display
# 
# 
# register = template.Library()
# 
# 
# @register.tag(name="user_is_cliente")
# def user_is_cliente(parser, token):
# 
# 
# 
#     bits = token.split_contents()
#     if len(bits) == 2:
#         user = bits[1]
#         as_var = None
#     elif len(bits) == 4:
#         user = bits[1]
#         as_var = bits[3]
#     else:
#         raise template.TemplateSyntaxError("'{0}' takes either two or four arguments".format(bits[0]))
#     return UserDisplayNode(user, as_var)
