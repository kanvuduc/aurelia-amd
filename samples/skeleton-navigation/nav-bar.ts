/// <reference path="../../typings/tsd.d.ts" />

import _aureliaFramework = require('aurelia-framework');

export class NavBar {
    static metadata() {
        return _aureliaFramework.Behavior.customElement('nav-bar').withProperty('router');
    }
}