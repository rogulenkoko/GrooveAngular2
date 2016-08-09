import {Component,Input,Output,EventEmitter, ElementRef, Inject,OnInit, ChangeDetectorRef} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'slider',
    template: 
    `
        <div id="slider"></div>
    `
})

export class SliderComponent implements OnInit {
    
    elementRef: ElementRef;
    @Input() slideValue: number;
    @Output() volume = new EventEmitter();
    constructor(@Inject(ElementRef) elementRef: ElementRef, public cdr: ChangeDetectorRef) {
      this.elementRef = elementRef;
    }

    ngOnInit() { 
      jQuery(this.elementRef.nativeElement).find("#slider").slider({
        range: false,
        orientation: "horizontal",
        min: 0,
        max: 100,
        value: this.slideValue*100,
        slide: ( event, ui ) => {
          this.slideValue = ui.value;
          this.volume.emit({volume:ui.value});
        }
      });
    }
}