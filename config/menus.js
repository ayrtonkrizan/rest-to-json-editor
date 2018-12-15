const menusConfig = [
    {
        id: 'getCliente', 
        title: 'Consulta cliente', 
        filters: [{id:'ID', placeholder:'Digite CPF/CNPJ'}],
        submit: () => console.log('getcliente')
    },
    {
        id: 'getFaturamento', 
        title: 'Consulta Status NF', 
        filters: [{id:'PVS', placeholder:'Digite Numeros de Pedidos'}],
        submit: () => console.log('getfaturamento')
    }
];