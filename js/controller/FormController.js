import {HttpService} from '../services/HttpService.js';
import {ProxyFactory} from '../services/ProxyFactory.js';

import {FiltersView} from '../view/FiltersView.js';
import {JsonView} from '../view/JsonView.js';
import {MenusView} from '../view/MenusView.js';

import {FiltersModel} from '../model/FiltersModel.js';
import {JsonViewerModel} from '../model/JsonViewerModel.js';
import {MenusModel} from '../model/MenusModel.js';


class FormController {
    constructor(){
        this._jsonDisplay = $('#json-display');
        this._restFilters = $('#rest-filters');
        this._menusDisplay = $('#menus-display');

        this._http = new HttpService();
        
        this._filtersView = new FiltersView(this._restFilters);
        this._filterList = ProxyFactory.create(
            new FiltersModel(),
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
            this._menusList.selecionado = e.target.id;
            let menu = this._menusList.menuSelecionado;
            this._filterList.morphModelByObject(menu);

            $('form').submit(() => {
                let link = this._filterList.urlFilters(menu.link);
                let body = this._filterList.bodyFilters();

                this._http
                    [menu.method](link, body)
                    .then(this._jsonEditor.alter)
                    .catch(console.log);
            });
        });

        this._carregaMenus(menusConfig)
    }

    _carregaMenus(menus){
        menus.forEach(this._menusList.add)
    }
}

let formController = new FormController();

export function currentInstance() {

    return formController;

}