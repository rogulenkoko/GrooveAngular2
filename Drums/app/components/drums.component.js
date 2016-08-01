System.register(['angular2/core', './notes.component', './settings.component'], function(exports_1, context_1) {
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
    var core_1, notes_component_1, settings_component_1;
    var DrumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notes_component_1_1) {
                notes_component_1 = notes_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            }],
        execute: function() {
            DrumsComponent = (function () {
                function DrumsComponent() {
                    this.notes = [];
                    this.isPlaying = false;
                    this.isMore4x4 = false;
                    this.notes.length = 16;
                    this.tempo = 90;
                }
                DrumsComponent.prototype.StartPlaying = function () {
                    if (!this.isPlaying) {
                        this.isPlaying = !this.isPlaying;
                        this.childrenNotes.toArray().forEach(function (child) { return child.Start(); });
                    }
                    else {
                        this.isPlaying = !this.isPlaying;
                        this.childrenNotes.toArray().forEach(function (child) { return child.Start(true); });
                    }
                };
                DrumsComponent.prototype.ChangeTempo = function ($event) {
                    this.tempo = $event.tempo;
                };
                DrumsComponent.prototype.SetSize = function ($event) {
                    this.notes.length = $event.notesCount;
                    this.isMore4x4 = $event.isMore;
                };
                DrumsComponent.prototype.SetGroove = function ($event) {
                    switch ($event.choice) {
                        case "1":
                            this.GetGefault();
                            break;
                        case "2":
                            this.GetFunky();
                            break;
                        case "3":
                            this.GetSimple();
                            break;
                        case "0":
                            this.Clear();
                            break;
                        default:
                            break;
                    }
                };
                DrumsComponent.prototype.GetGefault = function () {
                    this.childrenNotes.toArray().forEach(function (child) { return child.Clear(); });
                    this.childrenNotes.toArray().forEach(function (child) { return child.GetDefault(); });
                    this.SetInSize(4, 4, 44);
                };
                DrumsComponent.prototype.GetFunky = function () {
                    this.childrenNotes.toArray().forEach(function (child) { return child.Clear(); });
                    this.childrenNotes.toArray().forEach(function (child) { return child.GetFunky(); });
                    this.SetInSize(4, 4, 44);
                };
                DrumsComponent.prototype.GetSimple = function () {
                    this.childrenNotes.toArray().forEach(function (child) { return child.Clear(); });
                    this.childrenNotes.toArray().forEach(function (child) { return child.GetSimple(); });
                    this.SetInSize(4, 4, 44);
                };
                DrumsComponent.prototype.SetInSize = function (count, length, value) {
                    this.settingsChild.sizeSetting.count = count;
                    this.settingsChild.sizeSetting.length = length;
                };
                DrumsComponent.prototype.Clear = function () {
                    this.childrenNotes.toArray().forEach(function (child) { return child.Clear(); });
                    this.SetInSize(4, 4, 44);
                };
                __decorate([
                    core_1.ViewChildren(notes_component_1.NotesComponent), 
                    __metadata('design:type', core_1.QueryList)
                ], DrumsComponent.prototype, "childrenNotes", void 0);
                __decorate([
                    core_1.ViewChild(settings_component_1.SettingsComponent), 
                    __metadata('design:type', settings_component_1.SettingsComponent)
                ], DrumsComponent.prototype, "settingsChild", void 0);
                DrumsComponent = __decorate([
                    core_1.Component({
                        selector: 'drums',
                        templateUrl: "app/templates/drums.template.html",
                        directives: [notes_component_1.NotesComponent, settings_component_1.SettingsComponent]
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