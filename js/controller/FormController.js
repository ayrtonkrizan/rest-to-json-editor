class FormController {
    constructor(){
        this._jsonDisplay = $('#json-display');
        this._restFilters = $('#rest-filters');
        this._menusDisplay = $('#menus-display');
        
        this._filtersView = new FiltersView(this._restFilters);
        this._filterList = ProxyFactory.create(
            new FiltersModel('getCliente', "Consulta cliente", [{id:'ID', placeholder:'Digite CPF/CNPJ'}]),
            ['add', 'morphModel'],
            (model) => this._filtersView.update(model)
        );
        
        this._menusView = new MenusView(this._menusDisplay);
        this._menusList = ProxyFactory.create(
            new MenusModel(),
            ['add'],
            (model) => {
                this._menusView.update(model);
                
            }
        );
        
        //this._clientModel = new FiltersModel();
        //this._statusModel = new FiltersModel('getFaturamento', "Consulta Status NF", [{id:'PVS', placeholder:'Digite Numeros Notas'}])
        this._jsonView = (this._jsonDisplay);
        this._init();
    }

    _init(){
        $('header ul').on('click', (e) =>{
            this._teste = e;
            console.log(e.target.id);
            let menu = this._menusList.menus.find((m) => m.id == e.target.id)
            this._filterList.morphModelByObject(menu);
            $('form').submit(menu.submit);
        })

        this._carregaMenus(menusConfig)
    }

    _carregaMenus(menus){
        menus.forEach((menu) => this._menusList.add(menu))
    }
}