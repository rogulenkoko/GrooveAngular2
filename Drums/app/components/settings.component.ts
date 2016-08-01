import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {Control,ControlGroup,FormBuilder} from 'angular2/common';

@Component({
    selector: 'settings',
    templateUrl: 'app/templates/settings.template.html'
})
export class SettingsComponent {
    
    form:ControlGroup;
    sizeSetting={count:4,length:4};
    tempo:number;
    @Input() isPlaying;
    @Output() setSize = new EventEmitter();
    @Output() setGroove = new EventEmitter();
    @Output() setTempo = new EventEmitter();
    @Output() play = new EventEmitter();
    
    constructor(private _fb:FormBuilder) {
        this.form=_fb.group({
            noteSize:[''],
            grooveType:['']
        });
        (<Control>this.form.controls['noteSize']).updateValue(44);
        (<Control>this.form.controls['grooveType']).updateValue("1");
        this.tempo=90;
    }

    SetSize(out?){
        if(!out)
            this.sizeSetting={count:Math.floor(parseInt(this.form.controls["noteSize"].value)/10), 
                     length:parseInt(this.form.controls["noteSize"].value)%10};
        var isMore4x4;
        if(this.sizeSetting.count>this.sizeSetting.length)
             isMore4x4=true;
        else isMore4x4=false;
        if(!isNaN(this.sizeSetting.count*(16/this.sizeSetting.length)))
            this.setSize.emit({notesCount:this.sizeSetting.count*(16/this.sizeSetting.length),
                isMore:isMore4x4});
    }

    x=0;
    SetGroove(){
        this.x++;
        if(this.x==2){
            this.setGroove.emit({choice:this.form.controls["grooveType"].value});
            this.x=0;
        }
    }

    UpTempo(value?){
        if(!this.isPlaying){
            if(this.tempo<=200){
                if(value)
                    this.tempo+=value;
                else this.tempo++;
            }
        }
        this.setTempo.emit({tempo:this.tempo});
    }

    DownTempo(value?){
        if(!this.isPlaying){
            if(this.tempo>40){
                if(value)
                    this.tempo-=value;
                else this.tempo--;
            }
        }
        this.setTempo.emit({tempo:this.tempo});
    }

    StartPlaying(){
        this.play.emit({});
    }
 }