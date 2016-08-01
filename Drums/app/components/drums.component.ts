import {Component,ViewChild,ViewChildren,QueryList} from 'angular2/core';
import {NotesComponent} from './notes.component';
import {SettingsComponent} from './settings.component';



@Component({
    selector: 'drums',
    templateUrl:"app/templates/drums.template.html",
    directives:[NotesComponent,SettingsComponent]
})


export class DrumsComponent {
    notes=[];
    isPlaying=false;
    isMore4x4=false;
    tempo;
    constructor() {
        this.notes.length=16;
        this.tempo=90;
    }
    grooveSelect;

    @ViewChildren(NotesComponent) childrenNotes:QueryList<NotesComponent>;

    @ViewChild (SettingsComponent) settingsChild : SettingsComponent;
    
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

    ChangeTempo($event){
        this.tempo=$event.tempo;
    }
    
    SetSize($event){
         this.notes.length=$event.notesCount;
         this.isMore4x4=$event.isMore;
    }

    SetGroove($event){
            switch ($event.choice) {
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
        this.settingsChild.sizeSetting.count=count;
        this.settingsChild.sizeSetting.length=length;
    }
    Clear(){
        this.childrenNotes.toArray().forEach((child)=>child.Clear());
        this.SetInSize(4,4,44);
    }
}