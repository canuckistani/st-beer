define(function(require) {

    var Beers = {};

    Beers.cache = [];
    Beers.lastLoaded;

    Beers._get = function(callback) {
        var url = 'http://live-menu.staugustinesvancouver.com/taps.json?callback=?';
        $.getJSON(url, function(json) {
            cache = json;
            lastLoaded = new Date();
            callback(json);
        });
    }

    Beers.refresh = function(callback) {
        // hard server fetch
        this._get(callback);
    }

    Beers.getStyle = function(callback) {}

    Beers.getBrewers = function(callback) {}

    return Beers;
});