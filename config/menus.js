const menusConfig = [
    {
        id: 'getCliente', 
        title: 'Consulta cliente', 
        filters: [{id:'ID', placeholder:'Digite CPF/CNPJ'}],
        link: 'http://localhost:3000/clientes'
    },
    {
        id: 'getFaturamento', 
        title: 'Consulta Status NF', 
        filters: [{id:'PVS', placeholder:'Digite Numeros de Pedidos'}],
        link: 'http://localhost:3000/notas'
    }
];