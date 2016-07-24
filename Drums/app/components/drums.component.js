System.register(['angular2/core', 'angular2/common', './notes.component'], function(exports_1, context_1) {
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
    var core_1, common_1, notes_component_1;
    var DrumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (notes_component_1_1) {
                notes_component_1 = notes_component_1_1;
            }],
        execute: function() {
            DrumsComponent = (function () {
                function DrumsComponent(_fb) {
                    this._fb = _fb;
                    this.noteLength = 4;
                    this.notesCount = 4;
                    this.sizeSetting = { count: 4, length: 4 };
                    this.notes = [];
                    this.sizeSettingsOpen = false;
                    this.isPlaying = false;
                    this.isMore4x4 = false;
                    this.x = 0; //суперкостыль
                    this.form = _fb.group({
                        noteSize: [''],
                        grooveType: ['']
                    });
                    this.tempo = 90;
                    this.notes.length = 16;
                    this.form.controls['noteSize'].updateValue(44);
                    this.form.controls['grooveType'].updateValue("1");
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
                DrumsComponent.prototype.UpTempo = function (value) {
                    if (!this.isPlaying) {
                        if (this.tempo <= 200) {
                            if (value)
                                this.tempo += value;
                            else
                                this.tempo++;
                        }
                    }
                };
                DrumsComponent.prototype.DownTempo = function (value) {
                    if (!this.isPlaying) {
                        if (this.tempo > 40) {
                            if (value)
                                this.tempo -= value;
                            else
                                this.tempo--;
                        }
                    }
                };
                DrumsComponent.prototype.ShowSizeSettings = function () {
                    this.sizeSettingsOpen = !this.sizeSettingsOpen;
                };
                DrumsComponent.prototype.SetSize = function (out) {
                    if (!out)
                        this.sizeSetting = { count: Math.floor(parseInt(this.form.controls["noteSize"].value) / 10),
                            length: parseInt(this.form.controls["noteSize"].value) % 10 };
                    if (this.sizeSetting.count > this.sizeSetting.length)
                        this.isMore4x4 = true;
                    else
                        this.isMore4x4 = false;
                    this.noteLength = this.sizeSetting.length;
                    this.notesCount = this.sizeSetting.count;
                    if (!isNaN(this.sizeSetting.count * (16 / this.sizeSetting.length)))
                        this.notes.length = this.sizeSetting.count * (16 / this.sizeSetting.length);
                    this.sizeSettingsOpen = !this.sizeSettingsOpen;
                };
                DrumsComponent.prototype.SetGroove = function () {
                    this.x++;
                    if (this.x == 2) {
                        switch (this.form.controls["grooveType"].value) {
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
                        this.x = 0;
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
                    this.sizeSetting.count = count;
                    this.sizeSetting.length = length;
                    this.noteLength = length;
                    this.notesCount = count;
                    this.SetSize(true);
                    this.form.controls['noteSize'].updateValue(value);
                };
                DrumsComponent.prototype.Clear = function () {
                    this.childrenNotes.toArray().forEach(function (child) { return child.Clear(); });
                    this.SetInSize(4, 4, 44);
                };
                __decorate([
                    core_1.ViewChildren(notes_component_1.NotesComponent), 
                    __metadata('design:type', core_1.QueryList)
                ], DrumsComponent.prototype, "childrenNotes", void 0);
                DrumsComponent = __decorate([
                    core_1.Component({
                        selector: 'drums',
                        templateUrl: "app/templates/drums.template.html",
                        directives: [notes_component_1.NotesComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DrumsComponent);
                return DrumsComponent;
            }());
            exports_1("DrumsComponent", DrumsComponent);
        }
    }
});
//# sourceMappingURL=drums.component.js.map