const menusConfig = [
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
    }
];