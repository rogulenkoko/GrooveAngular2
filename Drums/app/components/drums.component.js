System.register(['angular2/core', './notes.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, notes_component_1;
    var DrumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notes_component_1_1) {
                notes_component_1 = notes_component_1_1;
            }],
        execute: function() {
            DrumsComponent = (function () {
                function DrumsComponent() {
                    this.noteLength = 4;
                    this.notesCount = 4;
                    this.notes = [];
                    this.sizeSettingsOpen = false;
                    this.tempo = 60;
                    this.notes.length = 16;
                }
                DrumsComponent.prototype.startPLaying = function () {
                    this.children.toArray().forEach(function (child) { return child.start(); });
                };
                DrumsComponent.prototype.upTempo = function () {
                    if (this.tempo <= 200)
                        this.tempo++;
                };
                DrumsComponent.prototype.downTempo = function () {
                    if (this.tempo > 40)
                        this.tempo--;
                };
                DrumsComponent.prototype.showSizeSettings = function () {
                    this.sizeSettingsOpen = !this.sizeSettingsOpen;
                };
                DrumsComponent.prototype.setSize = function (sizeSetting) {
                    this.noteLength = sizeSetting.length;
                    this.notesCount = sizeSetting.count;
                    this.notes.length = sizeSetting.count * (16 / sizeSetting.length);
                    this.sizeSettingsOpen = !this.sizeSettingsOpen;
                };
                __decorate([
                    core_1.ViewChildren(notes_component_1.NotesComponent), 
                    __metadata('design:type', core_1.QueryList)
                ], DrumsComponent.prototype, "children", void 0);
                DrumsComponent = __decorate([
                    core_1.Component({
                        selector: 'drums',
                        templateUrl: "app/templates/drums.template.html",
                        directives: [notes_component_1.NotesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DrumsComponent);
                return DrumsComponent;
            }());
            exports_1("DrumsComponent", DrumsComponent);
        }
    }
});
//# sourceMappingURL=drums.component.js.map