//import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';
//
//@inject(HttpClient)
/// <reference path="../../typings/tsd.d.ts" />

import _aureliaFramework = require('aurelia-framework');
import _aureliaHttpClient = require('aurelia-http-client');

export class Flickr{
    static inject() {
        return [_aureliaHttpClient.HttpClient];
    }

    heading = 'Flickr';
    images = [];
    url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

    constructor(public http: _aureliaHttpClient.HttpClient){
    }

    activate(){
        return this.http.jsonp(this.url).then(response => {
            this.images = response.content.items;
        });
    }

    canDeactivate(){
        return confirm('Are you sure you want to leave?');
    }
}