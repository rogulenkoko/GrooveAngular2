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
                    this.isChecked = false;
                    this.isPlaying = false;
                    this.Play = true;
                }
                NotesComponent.prototype.checkNote = function () {
                    if (this.isChecked)
                        this.isChecked = !this.isChecked;
                    else {
                        this.isChecked = !this.isChecked;
                        this.loop.play();
                    }
                };
                NotesComponent.prototype.start = function () {
                    var _this = this;
                    setTimeout(function () {
                        setInterval(function () {
                            if (_this.isChecked) {
                                _this.loop.play();
                                console.log(_this.indexNumber);
                            }
                        }, 60 * 4000 / _this.tempo);
                    }, this.indexNumber * (60 * 250 / this.tempo));
                };
                NotesComponent.prototype.ngOnInit = function () {
                    this.loop = new Audio(this.loopUrl);
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