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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var SliderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SliderComponent = (function () {
                function SliderComponent(elementRef, cdr) {
                    this.cdr = cdr;
                    this.volume = new core_1.EventEmitter();
                    this.elementRef = elementRef;
                }
                SliderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    jQuery(this.elementRef.nativeElement).find("#slider").slider({
                        range: false,
                        orientation: "horizontal",
                        min: 0,
                        max: 100,
                        value: this.slideValue * 100,
                        slide: function (event, ui) {
                            _this.slideValue = ui.value;
                            _this.volume.emit({ volume: ui.value });
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SliderComponent.prototype, "slideValue", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SliderComponent.prototype, "volume", void 0);
                SliderComponent = __decorate([
                    core_1.Component({
                        selector: 'slider',
                        template: "\n        <div id=\"slider\"></div>\n    "
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
                ], SliderComponent);
                return SliderComponent;
            }());
            exports_1("SliderComponent", SliderComponent);
        }
    }
});
//# sourceMappingURL=slider.component.js.map