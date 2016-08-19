"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var property_binding_component_1 = require('./property-binding.component');
var event_binding_component_1 = require('./event-binding.component');
var DatabindingComponent = (function () {
    function DatabindingComponent() {
        this.stringInterpolation = 'This is String Interpolation';
        this.numberInterpolation = 2;
    }
    DatabindingComponent.prototype.onTest = function () {
        return true;
    };
    DatabindingComponent.prototype.onClicked = function (value) {
        alert(value);
    };
    DatabindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-databinding',
            templateUrl: 'databinding.component.html',
            styleUrls: ['databinding.component.css'],
            directives: [property_binding_component_1.PropertyBindingComponent, event_binding_component_1.EventBindingComponent]
        })
    ], DatabindingComponent);
    return DatabindingComponent;
}());
exports.DatabindingComponent = DatabindingComponent;
//# sourceMappingURL=databinding.component.js.map