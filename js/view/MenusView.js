class MenusView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        let html = model.menus.map(menu => `<li><a id='${menu.id}' href="#">${menu.title}</a></li>`).join('');
        return html;
    }
}