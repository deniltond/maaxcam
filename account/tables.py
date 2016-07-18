from gerencial.models import Fatura
from table import Table
from table.columns import Column

class FaturaTable(Table):
    id = Column(field='id')
    name = Column(field='assinatura')
    class Meta:
        model = Fatura