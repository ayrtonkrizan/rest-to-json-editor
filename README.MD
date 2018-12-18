# Rest To Json Viewer
> **This is a web app built in JavaScript, with simple and straight forward configuration to test REST API`s.**

##Configuration
1. Clone this repository;
2. Open ./config/menus.js;
3. Push objects to list for create new menus;

### Menu Configuration
+ **id**: Unique id to create form when menu is selected;
+ **title**: Used to show in navbar;
+ **filters**:
	+ **id**: Used to create inputs on form and also to select them;
	+ **placeholder**: Information showed in input field
	+ **type**: (text, selectize or url) - field formatation or where this information will be used
+ **method**: REST method;
+ **link**: Server endpoint;

## Testing this Sample
1. run `npm install http-server -g`;
2. clone this repository;
3. cd to rest-to-json-viewer main folder;
4. open file `config/private.js` and replace `[SUA API KEY]` to `your Mavel api key`. More about Mavel API Key on [Marvel developer site](https://developer.marvel.com/)
5. run `http-server`;
6. Open browser and navigate to `localhost:8080` or address showed after run step 5;
7. Surf on web app;

## More About this project 
### Design Partners Applied
+ MVC;
+ Proxy;
+ Factory;

### Libraries
+ JQuery ; https://jquery.com/
+ Bootstrap: http://getbootstrap.com
+ Json Editor: https://www.jqueryscript.net/other/Beautiful-JSON-Viewer-Editor.html
+ Selectize: https://github.com/selectize/selectize.js
