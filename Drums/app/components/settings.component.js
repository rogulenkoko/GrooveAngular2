System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var SettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SettingsComponent = (function () {
                function SettingsComponent(_fb) {
                    this._fb = _fb;
                    this.sizeSetting = { count: 4, length: 4 };
                    this.setSize = new core_1.EventEmitter();
                    this.setGroove = new core_1.EventEmitter();
                    this.setTempo = new core_1.EventEmitter();
                    this.play = new core_1.EventEmitter();
                    this.x = 0;
                    this.form = _fb.group({
                        noteSize: [''],
                        grooveType: ['']
                    });
                    this.form.controls['noteSize'].updateValue(44);
                    this.form.controls['grooveType'].updateValue("1");
                    this.tempo = 90;
                }
                SettingsComponent.prototype.SetSize = function (out) {
                    if (!out)
                        this.sizeSetting = { count: Math.floor(parseInt(this.form.controls["noteSize"].value) / 10),
                            length: parseInt(this.form.controls["noteSize"].value) % 10 };
                    var isMore4x4;
                    if (this.sizeSetting.count > this.sizeSetting.length)
                        isMore4x4 = true;
                    else
                        isMore4x4 = false;
                    if (!isNaN(this.sizeSetting.count * (16 / this.sizeSetting.length)))
                        this.setSize.emit({ notesCount: this.sizeSetting.count * (16 / this.sizeSetting.length),
                            isMore: isMore4x4 });
                };
                SettingsComponent.prototype.SetGroove = function () {
                    this.x++;
                    if (this.x == 2) {
                        this.setGroove.emit({ choice: this.form.controls["grooveType"].value });
                        this.x = 0;
                    }
                };
                SettingsComponent.prototype.UpTempo = function (value) {
                    if (!this.isPlaying) {
                        if (this.tempo <= 200) {
                            if (value)
                                this.tempo += value;
                            else
                                this.tempo++;
                        }
                    }
                    this.setTempo.emit({ tempo: this.tempo });
                };
                SettingsComponent.prototype.DownTempo = function (value) {
                    if (!this.isPlaying) {
                        if (this.tempo > 40) {
                            if (value)
                                this.tempo -= value;
                            else
                                this.tempo--;
                        }
                    }
                    this.setTempo.emit({ tempo: this.tempo });
                };
                SettingsComponent.prototype.StartPlaying = function () {
                    this.play.emit({});
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SettingsComponent.prototype, "isPlaying", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SettingsComponent.prototype, "setSize", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SettingsComponent.prototype, "setGroove", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SettingsComponent.prototype, "setTempo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SettingsComponent.prototype, "play", void 0);
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'settings',
                        templateUrl: 'app/templates/settings.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SettingsComponent);
                return SettingsComponent;
            }());
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.component.js.map