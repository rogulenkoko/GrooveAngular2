import {Component,OnInit,Input} from 'angular2/core';


@Component({
    selector: 'notes',
    templateUrl:"app/templates/notes.template.html" 
})
export class NotesComponent implements OnInit{
    @Input() loopUrl;
    @Input() indexNumber=0;
    @Input() tempo=60;
    @Input() size;
    @Input() isMore;
    @Input() isQuarter;
    loop;
    isChecked=false;
    groove;

    ngOnInit(){
        this.loop = new Audio(this.loopUrl);
        if(this.indexNumber%4==0)
            this.isQuarter=true;
        else this.isQuarter=false;
        this.GetDefault();
    }

    checkNote(){
        if(this.isChecked)
            this.isChecked=!this.isChecked;
        else{
            this.isChecked=!this.isChecked;
            this.loop.play();
        }

        
    }
    start(isPlay?){
        setTimeout(()=>{
            if(!isPlay){
                this.groove = setInterval(()=>{
                    if(this.isChecked){
                    this.loop.play();
                    } 
                },60*250*this.size/this.tempo)
             }
            else clearInterval(this.groove);
        },this.indexNumber*(60*250/this.tempo))
    }

    GetDefault(){
        if(this.loopUrl=="app/sound/snare.wav" &&(this.indexNumber==4 || this.indexNumber==12)){
            this.isChecked=true;
        }
        if(this.loopUrl=="app/sound/kick.wav"
         && (this.indexNumber==0 
         || this.indexNumber==3
         || this.indexNumber==6
         || this.indexNumber==9
         || this.indexNumber==12
         || this.indexNumber==15
         )){
            this.isChecked=true;
        }
        if(this.loopUrl=="app/sound/hat.wav" && (this.indexNumber%2==0)){
            this.isChecked=true;
        }
    }

    Clear(){
        this.isChecked=false;
    }
}