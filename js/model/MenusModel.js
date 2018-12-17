class MenusModel {
    constructor(){
        this._idSelecionado = '';
        this._listaMenus = [];
    }

    add(menu){
        this._listaMenus.push(menu);
    }

    get menus(){
        return this._listaMenus
    }

    get menuSelecionado(){
        return this._listaMenus.find((m) => m.id == this._idSelecionado)
    }

    set selecionado(id){
        this._idSelecionado = id;
    }
    
}