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
        link: 'http://localhost/clientes'
    },
    {
        id: 'getFaturamento', 
        title: 'Consulta Status NF', 
        filters: [{id:'PVS', placeholder:'Digite Numeros de Pedidos', type:'selectize'}],
        method: 'post',
        link: 'http://localhost/notas'
    },
    {
        id: 'getMarvel',
        title: 'API Marvel - Characters',
        filters: [ {id:'name', placeholder:'Digite nome personagem', type:'url'}],
        method: 'get',
        link: 'https://gateway.marvel.com:443/v1/public/characters?name={name}&apikey='+ keysConfig.marvel
    }
];