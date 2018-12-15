class FormController {
    constructor(){
        this._jsonDisplay = $('#json-display');
        this._restFilters = $('#rest-filters');
        this._menusDisplay = $('#menus-display');

        this._http = new HttpService();
        
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
            (model) => this._menusView.update(model)
        );
        
        this._jsonView = new JsonView(this._jsonDisplay);
        this._jsonEditor = ProxyFactory.create(
            new JsonViewerModel(),
            ['alter'],
            (model) => this._jsonView.update(model)
        );
        
        this._init();
    }
    _init(){
        $('header ul').on('click', (e) =>{
            let menu = this._menusList.menus.find((m) => m.id == e.target.id)
            this._filterList.morphModelByObject(menu);

            $('form').submit(() => {
                let body = {};
                let link = '';
                
                link = menu.link;
                this._filterList.filters
                        .map(x => link = x.type == 'url' ? menu.link.replace(`{${x.id}}`, $(`#${x.id}`).val()) : link);
                this._filterList.filters
                    .map(x => body[x.id] = x.type != 'selectize' ? $(`#${x.id}`).val() : $(`#${x.id}`).val().split(','));

                this._http
                    [menu.method](link, body)
                    .then(json => {
                        console.log(json);
                        this._jsonEditor.alter(json);
                    })
                    .catch(err => console.log(err));
            });
        });

        this._carregaMenus(menusConfig)
    }

    _carregaMenus(menus){
        menus.forEach((menu) => this._menusList.add(menu))
    }
}