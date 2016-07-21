import {Component,ViewChildren,QueryList} from 'angular2/core';
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
    notes=[];
    sizeSettingsOpen=false;
    isPlaying=false;
    isMore4x4=false;
    constructor() {
        this.tempo=90;
        this.notes.length=16;
    }
    @ViewChildren(NotesComponent) children:QueryList<NotesComponent>;
    
    startPLaying(){
        if(!this.isPlaying){
            this.isPlaying=!this.isPlaying;
       	    this.children.toArray().forEach((child)=>child.start());
        }
        else {
            this.isPlaying=!this.isPlaying;
            this.children.toArray().forEach((child)=>child.start(true));
        }
    }

    upTempo(value?){
        if(this.tempo<=200){
            if(value)
                this.tempo+=value;
            else this.tempo++;
        }
            
    }

    downTempo(value?){
        if(this.tempo>40)
        if(value)
            this.tempo-=value;
        else this.tempo--;
    }

    showSizeSettings(){
        this.sizeSettingsOpen=!this.sizeSettingsOpen;
    }

    setSize(sizeSetting){
        if(sizeSetting.count>sizeSetting.length)
            this.isMore4x4=true;
        else this.isMore4x4=false;
        this.noteLength=sizeSetting.length;
        this.notesCount=sizeSetting.count;
        this.notes.length=sizeSetting.count*(16/sizeSetting.length);
        this.sizeSettingsOpen=!this.sizeSettingsOpen;
    }
    getGefault(){
        this.children.toArray().forEach((child)=>child.Clear());
        this.children.toArray().forEach((child)=>child.GetDefault());
    }

    clear(){
        this.children.toArray().forEach((child)=>child.Clear());
    }
}