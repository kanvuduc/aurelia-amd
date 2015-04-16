//import {inject} from 'aurelia-framework';
//import {Router} from 'aurelia-router';
//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';

//@inject(Router)
/// <reference path="../../typings/tsd.d.ts" />

import _aureliaFramework = require('aurelia-framework');
import _aureliaRouter = require('aurelia-router');
import _bootstrap = require('bootstrap');

export class App {
    static inject() {
        return [_aureliaRouter.Router];
    }

    constructor(public router: _aureliaRouter.Router) {

        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
                { route: 'flickr',        moduleId: './flickr',       nav: true }
            ]);
        });
    }
}