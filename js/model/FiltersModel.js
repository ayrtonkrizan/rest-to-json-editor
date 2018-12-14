class FiltersModel{
    constructor(id, title, filterList){
        this.morphModel(id, title, filterList);
    }
    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }

    get filters(){
        return [].concat(this._filterList);
    }
    morphModelByObject(obj){
        this.morphModel(obj[Object.getOwnPropertyNames(obj)[0]], obj[Object.getOwnPropertyNames(obj)[1]], obj[Object.getOwnPropertyNames(obj)[2]]);
    }
    morphModel(id, title, filterList){
        this._id = id;
        this._title = title;
        this._filterList = [].concat(filterList);
    }

    addFilter(filter){
        this._filterList.push(filter);
    }
}

