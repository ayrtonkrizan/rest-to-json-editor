const menusConfig = [
    {
        id: 'getCliente', 
        title: 'Consulta cliente', 
        filters: [
            {id:'ID', placeholder:'Digite CPF/CNPJ', type:'text'},
            {id:'M', placeholder:'Digite muitas coisas', type:'selectize'},
            {id:'N', placeholder:'Digite muitas coisas', type:'selectize'}
        ],
        method: 'get',
        link: 'http://localhost:3000/clientes'
    },
    {
        id: 'getFaturamento', 
        title: 'Consulta Status NF', 
        filters: [{id:'PVS', placeholder:'Digite Numeros de Pedidos', type:'selectize'}],
        method: 'post',
        link: 'http://localhost:3000/notas'
    }
];