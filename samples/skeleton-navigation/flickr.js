//import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';
//
//@inject(HttpClient)
/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", 'aurelia-http-client'], function (require, exports, _aureliaHttpClient) {
    var Flickr = (function () {
        function Flickr(http) {
            this.http = http;
            this.heading = 'Flickr';
            this.images = [];
            this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
        }
        Flickr.inject = function () {
            return [_aureliaHttpClient.HttpClient];
        };
        Flickr.prototype.activate = function () {
            var _this = this;
            return this.http.jsonp(this.url).then(function (response) {
                _this.images = response.content.items;
            });
        };
        Flickr.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave?');
        };
        return Flickr;
    })();
    exports.Flickr = Flickr;
});
//# sourceMappingURL=flickr.js.map