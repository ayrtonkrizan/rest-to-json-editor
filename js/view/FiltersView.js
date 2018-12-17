//import {View} from './View.js';

class FiltersView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        let fields = {
            text: '<input id="{id}" type="text" placeholder="{placeholder}"/>',
            selectize: '<input id="{id}" type="selectize" placeholder="{placeholder}"/>',
            url: '<input id="{id}" type="text" placeholder="{placeholder}"/>',
        }; 
        let html = `
        <h1 class="text-center">${model.title}</h1>
        <div class="text-center">
            <form webservice="${model.id}" class="form">
                ${model.filterList.map(f=> fields[f.type].replace('{id}', f.id).replace('{placeholder}', f.placeholder)).join('')}
                <button id="submit" type="submit" class="btn btn-primary">Consultar</button>
            </form>
        </div>
        `;
        return html;
    }
    update(model){
        super.update(model);

        $('input[type="selectize"]')
            .selectize({
                delimiter: ',',
                persist: false,
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    }
                }
        });
    }
}