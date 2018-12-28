const menusConfig = [
    {
        id:'viaCEP',
        title: 'Consulta CEP',
        filters:[
            {id:'cep', placeholder:'Digite o CEP', type:'url'}
        ],
        method: 'get',
        link: 'http://viacep.com.br/ws/{cep}/json/'
    },
    {
        id: 'getMarvel',
        title: 'API Marvel - Characters',
        filters: [ 
            {id:'name', placeholder:'Digite nome personagem', type:'url'},
            {id:'limit', placeholder:'Quantos retorno deseja?', type:'url'},
            {id:'offset', placeholder:'Quantos itens deseja pular', type:'url'}
        ],
        method: 'get',
        link: 'https://gateway.marvel.com:443/v1/public/characters?name={name}&limit={limit}&offset={offset}&apikey='+ keysConfig.marvel
    },
    {
        id: 'getMarvel2',
        title: 'API Marvel - comics',
        filters: [
            {id:'limit', placeholder:'Quantos retorno deseja?', type:'url'},
            {id:'offset', placeholder:'Quantos itens deseja pular', type:'url'}
        ],
        method: 'get',
        link: 'https://gateway.marvel.com:443/v1/public/comics?limit={limit}&offset={offset}&apikey='+ keysConfig.marvel
    },
    {
        id: 'getMarvel3',
        title: 'API Marvel - Events',
        filters: [ 
            {id:'limit', placeholder:'Quantos retorno deseja?', type:'url'},
            {id:'offset', placeholder:'Quantos itens deseja pular', type:'url'}
        ],
        method: 'get',
        link: 'https://gateway.marvel.com:443/v1/public/events?limit={limit}&offset={offset}&apikey='+ keysConfig.marvel
    },
    {
        id: 'getCliente', 
        title: 'Consulta cliente', 
        filters: [
            {id:'ID', placeholder:'Digite CPF/CNPJ', type:'text'},
            {id:'M', placeholder:'Digite muitas coisas', type:'selectize'}
        ],
        method: 'get',
        link: 'http://localhost/clientes'
    },
    {
        id: 'getFaturamento', 
        title: 'Consulta Status NF', 
        filters: [
            {id:'Token', placeholder:'Digite Token', type:'text'},
            {id:'PVS', placeholder:'Digite Numeros de Pedidos', type:'selectize'}
        ],
        method: 'post',
        //link: 'http://localhost/notas'
        link:'https://gpdb.geistlich.com:8443/B1iXcellerator/exec/ipo/vP.0010000117.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/getFaturamento'
    },
    {
        id: 'starWars1',
        title: 'Star Wars',
        filters: [
            {id:'person', placeholder:'Type a number', type:'url'}
        ],
        method: 'get',
        link:'https://swapi.co/api/people/{person}/'
    }
];