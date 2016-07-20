import {Component} from 'angular2/core';
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
    constructor() {
        this.tempo=60;
        this.notes.length=16;
    }

    upTempo(){
        if(this.tempo<=200)
            this.tempo++;
    }

    downTempo(){
        if(this.tempo>40)
            this.tempo--;
    }

    showSizeSettings(){
        this.sizeSettingsOpen=!this.sizeSettingsOpen;
    }

    setSize(sizeSetting){
        this.noteLength=sizeSetting.length;
        this.notesCount=sizeSetting.count;
        this.notes.length=sizeSetting.count*(16/sizeSetting.length);
        this.sizeSettingsOpen=!this.sizeSettingsOpen;
    }

}