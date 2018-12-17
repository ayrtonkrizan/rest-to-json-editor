export class FiltersModel{
    constructor(id, title, filterList){
        this.morphModel(id, title, filterList);
    }
    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }
    get filterList(){
        return [].concat(this._filterList);
    }
    get filters(){
        return [].concat(this._filterList)
                    .map(f => {
                        f['value'] =  f.type == 'selectize'? $(`#${f.id}`).val().split(',') : $(`#${f.id}`).val(); 
                        return f
                    });
    }
    urlFilters(link){
        [].concat(this.filters.filter(f => f.type == 'url')).map(x => link = link.replace(`{${x.id}}`, x.value));
        return link;
    }
    bodyFilters(){
        var body = {};
        [].concat(this.filters.filter(f => f.type != 'url')).map(x => body[x.id] = x.value);
        return body;
    }
    morphModelByObject(obj){
        this.morphModel(obj[Object.getOwnPropertyNames(obj)[0]], obj[Object.getOwnPropertyNames(obj)[1]], obj[Object.getOwnPropertyNames(obj)[2]]);
    }
    morphModel(id, title, filterList){
        this._id = id;
        this._title = title;
        this._filterList = [].concat(filterList);
    }

    add(filter){
        this._filterList.push(filter);
    }

}

