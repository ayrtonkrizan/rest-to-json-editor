const jsonToEditor = (json, seletor) => {
    let editor = new JsonEditor(seletor, {});
    editor.load(json);
}

const f_teste = () => console.log('fui importado');

$(()=>{
    jsonToEditor({id:1, nome:"Ayrton"}, '#json-display');
});