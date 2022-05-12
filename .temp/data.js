  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', historico: 'Receita Líq. Delivery B.', valor: 1829},
    {key: '2', tipo: 'despesa', historico: 'Prestação Apto', valor: 183.03},
    {key: '3', tipo: 'despesa', historico: 'Conta Luz', valor: 199.09},   
    {key: '4', tipo: 'receita', historico: 'PIX Recebido', valor: 89.90},
    {key: '5', tipo: 'despesa', historico: 'Internet + Recarga Celular', valor: 144.54},  
    {key: '6', tipo: 'despesa', historico: 'Assinatura VPS', valor: 49.90},
    {key: '7', tipo: 'despesa', historico: 'Despesas Diversas', valor: 38.45},  
    {key: '8', tipo: 'despesa', historico: 'Compras', valor: 29.50},
  ])


log de erros:

unhandled promise rejection: error: child failed: path argument was an invalid path = "undefined". 
paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"

warning expo > uuid@3.4.0: Please upgrade to version 7 or higher