
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
            list.add({
                title: beer.brewer + " '" + beer.name + "'",
                name: beer.name,
                brewer: beer.brewer,
                location: beer.brewer_location,
                desc: beer.description,
                ibu: beer.ibu,
                abv: beer.alcohol_by_volume,
                remaining: Math.round(beer.remaining, 2)
            });
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
        $('.title', this).html(item.get('name'));
        $('.brewer', this).html(item.get('brewer'));
        $('.location', this).html(item.get('location'));
        $('.desc', this).html(item.get('desc'));
        $('.ibu', this).html('IBU: '+item.get('ibu'));
        $('.abv', this).html('ABV: '+item.get('abv'));
        $('.remaining', this).html(item.get('remaining')+'% left!');
    };

    Beers.refresh(makeList);
});