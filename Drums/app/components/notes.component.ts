import {Component,OnInit,Input} from 'angular2/core';
import {Note} from './note.model';


@Component({
    selector: 'notes',
    templateUrl:"app/templates/notes.template.html" 
})
export class NotesComponent implements OnInit{
    @Input() loopUrl;
    @Input() indexNumber=0;
    @Input() tempo=60;
    loop;
    isChecked=false;
    isPlaying=false;
    Play=true;
    checkNote(){
        if(this.isChecked)
            this.isChecked=!this.isChecked;
        else{
            this.isChecked=!this.isChecked;
            this.loop.play();
        }

        
    }
    start(){
        setTimeout(()=>{
            setInterval(()=>{
                if(this.isChecked){
                this.loop.play();
                console.log(this.indexNumber);
            } 
        },60*4000/this.tempo)
        },this.indexNumber*(60*250/this.tempo))
    }

    ngOnInit(){
        this.loop = new Audio(this.loopUrl);
    }
}