//import {View} from './View.js';

class FiltersView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        var html = `
        <h1 class="text-center">${model.title}</h1>
        <div class="text-center">
            <form webservice="${model.id}" class="form">
                <input id="${model.filters[0].id}" placeholder="${model.filters[0].placeholder}"/>
                <button id="submit" type="submit">Consultar</button>
            </form>
        </div>
        `;
        return html;
    }
    update(model){
        super.update(model);
    }
}