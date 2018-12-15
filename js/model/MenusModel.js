class MenusModel {
    constructor(){
        this._listaMenus = [];
    }

    add(menu){
        this._listaMenus.push(menu);
    }

    get menus(){
        return this._listaMenus
    }
    
}