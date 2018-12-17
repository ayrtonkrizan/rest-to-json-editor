import {View} from './View.js';

export class JsonView extends View{
    constructor(elemento){
        super(elemento);
        this._editor = new JsonEditor(this._elemento, {});
    }

    template(model) {
        return model.dados;
    }

    update(model){
        this._editor.load(this.template(model));
    }
}