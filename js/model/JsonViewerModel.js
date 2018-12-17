export class JsonViewerModel {
    constructor(){
        this._data = {};
    }

    alter(json){
        this._data = json;
    }

    get dados(){
        return this._data;
    }
    
}