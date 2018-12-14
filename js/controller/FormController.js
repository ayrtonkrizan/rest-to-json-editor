class FormController {
    constructor(){
        this._jsonDisplay = $('#json-display');
        this._restFilters = $('#rest-filters');
        this._clientModel = new FiltersModel('getCliente', "Consulta cliente", [{id:'ID', placeholder:'Digite CPF/CNPJ'}]);
        this._statusModel = new FiltersModel('getFaturamento', "Consulta Status NF", [{id:'PVS', placeholder:'Digite Numeros Notas'}])
        this._filtersView = new FiltersView(this._restFilters);
        this._jsonView = (this._jsonDisplay);
        this._init();
    }

    _init(){
        $('header a').on('click', (e) =>{
            console.log(e.target.id);
            switch(e.target.id){
                case 'getCliente':
                    this._filtersView.update(this._clientModel);
                    break;
                case 'getFaturamento':
                    this._filtersView.update(this._statusModel);
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