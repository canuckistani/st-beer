
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the layouts
    require('layouts/layouts');

    // fetch the model
    var Beers = require('./beers');

    // Write your app here.


    function formatDate(d) {
        return (d.getMonth()+1) + '/' +
            d.getDate() + '/' +
            d.getFullYear();
    }

    // List view`
    var list = $('.list').get(0);



    function makeList(data) {
        data.forEach(function(beer) {
            var tmp = {
                title: beer.name,
                desc: beer.description
            };
            list.add(tmp);
        });
    }
    

    $('button.refresh', list).click(function() {
        // Fetch beers
        // list.reset();
        Beers.refresh(makeList);
    });
    
    // Detail view

    var detail = $('.detail').get(0);
    detail.render = function(item) {
        $('.title', this).html(item.get('title'));
        $('.desc', this).html(item.get('desc'));

    };

    Beers.refresh(makeList);
});