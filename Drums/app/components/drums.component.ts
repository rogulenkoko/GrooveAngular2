import {Component,ViewChild,ViewChildren,QueryList} from 'angular2/core';
import {Control,ControlGroup,FormBuilder} from 'angular2/common';
import {NotesComponent} from './notes.component';


@Component({
    selector: 'drums',
    templateUrl:"app/templates/drums.template.html",
    directives:[NotesComponent]
})


export class DrumsComponent {
    tempo:number;
    noteLength=4;
    notesCount=4;
    sizeSetting={count:4,length:4};
    notes=[];
    sizeSettingsOpen=false;
    isPlaying=false;
    isMore4x4=false;
    //я так понял баг ангуляра, что нельзя control без формы

    form:ControlGroup;
    constructor(private _fb:FormBuilder) {
        this.form=_fb.group({
            noteSize:[''],
            grooveType:['']
        });
        this.tempo=90;
        this.notes.length=16;
        (<Control>this.form.controls['noteSize']).updateValue(44);
        (<Control>this.form.controls['grooveType']).updateValue("1");
    }
    grooveSelect;

    @ViewChildren(NotesComponent) childrenNotes:QueryList<NotesComponent>;
    
    StartPlaying(){
        if(!this.isPlaying){
            this.isPlaying=!this.isPlaying;
       	    this.childrenNotes.toArray().forEach((child)=>child.Start());
        }
        else {
            this.isPlaying=!this.isPlaying;
            this.childrenNotes.toArray().forEach((child)=>child.Start(true));
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
    }

    DownTempo(value?){
        if(!this.isPlaying){
            if(this.tempo>40){
                if(value)
                    this.tempo-=value;
                else this.tempo--;
            }
        }
    }

    ShowSizeSettings(){
        this.sizeSettingsOpen=!this.sizeSettingsOpen;
    }

    SetSize(out?){
        if(!out)
            this.sizeSetting={count:Math.floor(parseInt(this.form.controls["noteSize"].value)/10), 
                     length:parseInt(this.form.controls["noteSize"].value)%10};
        if(this.sizeSetting.count>this.sizeSetting.length)
            this.isMore4x4=true;
        else this.isMore4x4=false;
        this.noteLength=this.sizeSetting.length;
        this.notesCount=this.sizeSetting.count;
        if(!isNaN(this.sizeSetting.count*(16/this.sizeSetting.length)))
            this.notes.length=this.sizeSetting.count*(16/this.sizeSetting.length);
        this.sizeSettingsOpen=!this.sizeSettingsOpen;
    }

    x=0; //суперкостыль

    SetGroove(){
        this.x++;
        if(this.x==2){
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
            this.x=0;
        }
    }
    GetGefault(){
        this.childrenNotes.toArray().forEach((child)=>child.Clear());
        this.childrenNotes.toArray().forEach((child)=>child.GetDefault());
        this.SetInSize(4,4,44);
    }

    GetFunky(){
        this.childrenNotes.toArray().forEach((child)=>child.Clear());
        this.childrenNotes.toArray().forEach((child)=>child.GetFunky());   
        this.SetInSize(4,4,44);
    }

    GetSimple(){
        this.childrenNotes.toArray().forEach((child)=>child.Clear());
        this.childrenNotes.toArray().forEach((child)=>child.GetSimple());   
        this.SetInSize(4,4,44);
    }
    SetInSize(count:number,length:number,value:number){
        this.sizeSetting.count=count;
        this.sizeSetting.length=length;
        this.noteLength=length;
        this.notesCount=count;
        this.SetSize(true);
        (<Control>this.form.controls['noteSize']).updateValue(value);
    }
    Clear(){
        this.childrenNotes.toArray().forEach((child)=>child.Clear());
        this.SetInSize(4,4,44);
    }
}