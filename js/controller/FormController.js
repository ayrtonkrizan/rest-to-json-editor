class FormController {
    constructor(){
        this._jsonDisplay = $('#json-display');
        this._restFilters = $('#rest-filters');
        
        this._filtersView = new FiltersView(this._restFilters);
        
        this._filterList = ProxyFactory.create(
            new FiltersModel('getCliente', "Consulta cliente", [{id:'ID', placeholder:'Digite CPF/CNPJ'}]),
            ['addFilter', 'morphModel'],
            (model) => this._filtersView.update(model)
        );

        this._menus = {
            getCliente: {
                id: 'getCliente', 
                name: 'Consulta cliente', 
                filters: [{id:'ID', placeholder:'Digite CPF/CNPJ'}]
            },
            getFaturamento: {
                id: 'getFaturamento', 
                name: 'Consulta Status NF', 
                filters: [{id:'PVS', placeholder:'Digite Numeros de Pedidos'}]
            }
        };
        //this._clientModel = new FiltersModel();
        //this._statusModel = new FiltersModel('getFaturamento', "Consulta Status NF", [{id:'PVS', placeholder:'Digite Numeros Notas'}])
        this._jsonView = (this._jsonDisplay);
        this._init();
    }

    _init(){
        $('header a').on('click', (e) =>{
            //console.log(e.target.id);
            switch(e.target.id){
                case 'getCliente':
                    this._filterList.morphModelByObject(formController._menus["getFaturamento"]);
                    break;
                case 'getFaturamento':
                    this._filterList.morphModelByObject(formController._menus["getFaturamento"]);
                    //this._filtersView.update(this._statusModel);
                    // $('#PVS').selectize({
                    //     delimiter: ',',
                    //     persist: false,
                    //     create: function(input) {
                    //         return {
                    //             value: input,
                    //             text: input
                    //         }
                    //     }
                    // });
                    // break;
            }
        })
    }
}