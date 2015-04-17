/// <reference path="../../typings/tsd.d.ts" />

import _aureliaFramework = require('aurelia-framework');

export class NavBar {
    static decorators() {
        debugger;
        return _aureliaFramework.Decorators.customElement('nav-bar').bindable('router');
    }
}