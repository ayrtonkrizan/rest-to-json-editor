class FiltersModel{
    constructor(id, title, filterList){
        this._id = id;
        this._title = title;
        this._filterList = filterList;
    }
    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }

    get filters(){
        return this._filterList;
    }
    get submit(){ 
        return () => alert('olar!');
    }
}

