System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NotesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotesComponent = (function () {
                function NotesComponent() {
                    this.indexNumber = 0;
                    this.tempo = 60;
                }
                NotesComponent.prototype.ngOnInit = function () {
                    if (this.loopUrl != "non")
                        this.loop = new Audio(this.loopUrl);
                    //сомнительная динамика 
                    if (this.loopUrl == "app/sound/hat.wav") {
                        if (this.indexNumber == 2 || this.indexNumber == 6 || this.indexNumber == 10 || this.indexNumber == 14)
                            this.loop.volume = 0.6;
                        if (this.indexNumber % 2 != 0)
                            this.loop.volume = 0.4;
                    }
                    if (this.indexNumber % 4 == 0)
                        this.isQuarter = true;
                    else
                        this.isQuarter = false;
                    this.GetDefault();
                };
                NotesComponent.prototype.CheckNote = function () {
                    if (this.loopUrl != "non") {
                        if (this.isChecked)
                            this.isChecked = !this.isChecked;
                        else {
                            this.isChecked = !this.isChecked;
                            this.loop.play();
                        }
                    }
                };
                NotesComponent.prototype.LocalPlay = function () {
                    var _this = this;
                    if (this.loopUrl != "non") {
                        if (this.isChecked) {
                            this.loop.play();
                        }
                    }
                    else {
                        this.isChecked = true;
                        setTimeout(function () { return _this.isChecked = false; }, 60 * 250 / this.tempo);
                    }
                };
                NotesComponent.prototype.Start = function (isPlay) {
                    var _this = this;
                    setTimeout(function () {
                        if (!isPlay) {
                            _this.LocalPlay();
                            _this.groove = setInterval(function () {
                                _this.LocalPlay();
                            }, 60 * 250 * _this.size / _this.tempo);
                        }
                        else
                            clearInterval(_this.groove);
                    }, this.indexNumber * (60 * 250 / this.tempo));
                };
                NotesComponent.prototype.GetDefault = function () {
                    if (this.loopUrl == "app/sound/snare.wav" && (this.indexNumber == 4 || this.indexNumber == 12))
                        this.isChecked = true;
                    if (this.loopUrl == "app/sound/kick.wav"
                        && (this.indexNumber == 0
                            || this.indexNumber == 3
                            || this.indexNumber == 6
                            || this.indexNumber == 9
                            || this.indexNumber == 12
                            || this.indexNumber == 15)) {
                        this.isChecked = true;
                    }
                    if (this.loopUrl == "app/sound/hat.wav" && (this.indexNumber % 2 == 0))
                        this.isChecked = true;
                };
                NotesComponent.prototype.GetFunky = function () {
                    if (this.loopUrl == "app/sound/hat.wav")
                        this.isChecked = true;
                    if (this.loopUrl == "app/sound/snare.wav" && (this.indexNumber == 4 || this.indexNumber == 12))
                        this.isChecked = true;
                    if (this.loopUrl == "app/sound/kick.wav"
                        && (this.indexNumber == 0
                            || this.indexNumber == 3
                            || this.indexNumber == 9
                            || this.indexNumber == 10
                            || this.indexNumber == 13))
                        this.isChecked = true;
                };
                NotesComponent.prototype.GetSimple = function () {
                    if (this.loopUrl == "app/sound/hat.wav" &&
                        !(this.indexNumber == 3
                            || this.indexNumber == 7
                            || this.indexNumber == 11
                            || this.indexNumber == 15))
                        this.isChecked = true;
                    if (this.loopUrl == "app/sound/snare.wav" && (this.indexNumber == 3
                        || this.indexNumber == 6
                        || this.indexNumber == 12))
                        this.isChecked = true;
                    if (this.loopUrl == "app/sound/kick.wav"
                        && (this.indexNumber == 0
                            || this.indexNumber == 8
                            || this.indexNumber == 9
                            || this.indexNumber == 11
                            || this.indexNumber == 13)) {
                        this.isChecked = true;
                    }
                };
                NotesComponent.prototype.Clear = function () {
                    this.isChecked = false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotesComponent.prototype, "loopUrl", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotesComponent.prototype, "indexNumber", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotesComponent.prototype, "tempo", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotesComponent.prototype, "size", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotesComponent.prototype, "isMore", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotesComponent.prototype, "isQuarter", void 0);
                NotesComponent = __decorate([
                    core_1.Component({
                        selector: 'notes',
                        templateUrl: "app/templates/notes.template.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NotesComponent);
                return NotesComponent;
            }());
            exports_1("NotesComponent", NotesComponent);
        }
    }
});
//# sourceMappingURL=notes.component.js.map