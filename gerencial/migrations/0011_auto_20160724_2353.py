# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-24 23:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gerencial', '0010_auto_20160724_2352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]