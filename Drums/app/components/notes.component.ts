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
    groove;
    isChecked;
    ngOnInit(){
        if(this.loopUrl!="non")
            this.loop = new Audio(this.loopUrl);
        //сомнительная динамика 
        if(this.loopUrl=="app/sound/hat.wav"){
            if(this.indexNumber==2 || this.indexNumber==6 || this.indexNumber==10 || this.indexNumber==14)
                this.loop.volume=0.6;
            if(this.indexNumber%2!=0 )
                this.loop.volume=0.4; 
        }
        if(this.indexNumber%4==0)
            this.isQuarter=true;
        else this.isQuarter=false;
        this.GetDefault();
    }

    CheckNote(){
        if(this.loopUrl!="non"){
            if(this.isChecked)
            this.isChecked=!this.isChecked;
            else{
                this.isChecked=!this.isChecked;
                this.loop.play();
            }
        }
    }

    LocalPlay(){
        if(this.loopUrl!="non"){
            if(this.isChecked){
                        this.loop.play();
            }
        }
        else {
            this.isChecked=true;
            setTimeout(()=>this.isChecked=false,60*250/this.tempo)
        }
    }

    Start(isPlay?){
        setTimeout(()=>{
            if(!isPlay){
                this.LocalPlay();
                this.groove = setInterval(()=>{
                    this.LocalPlay();
                },60*250*this.size/this.tempo)
             }
            else clearInterval(this.groove);
        },this.indexNumber*(60*250/this.tempo))
    }

    GetDefault(){
        if(this.loopUrl=="app/sound/snare.wav" &&(this.indexNumber==4 || this.indexNumber==12))
            this.isChecked=true;
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
        if(this.loopUrl=="app/sound/hat.wav" && (this.indexNumber%2==0))
            this.isChecked=true;
        
    }

    GetFunky(){
         if(this.loopUrl=="app/sound/hat.wav")
                this.isChecked=true;
        if(this.loopUrl=="app/sound/snare.wav" &&(this.indexNumber==4 || this.indexNumber==12))
            this.isChecked=true;
        if(this.loopUrl=="app/sound/kick.wav"
         && (this.indexNumber==0 
         || this.indexNumber==3
         || this.indexNumber==9
         || this.indexNumber==10
         || this.indexNumber==13
         ))
            this.isChecked=true;
    }

    GetSimple(){
        if(this.loopUrl=="app/sound/hat.wav" &&
         !(
             this.indexNumber==3
             || this.indexNumber==7
             || this.indexNumber==11
             || this.indexNumber==15
        ))
                this.isChecked=true;

        if(this.loopUrl=="app/sound/snare.wav" &&(this.indexNumber==3 
                || this.indexNumber==6
                || this.indexNumber==12))
            this.isChecked=true;

        if(this.loopUrl=="app/sound/kick.wav"
         && (this.indexNumber==0 
         || this.indexNumber==8
         || this.indexNumber==9
         || this.indexNumber==11
         || this.indexNumber==13
         )){
            this.isChecked=true;
        }
    }

    Clear(){
        this.isChecked=false;
    }
}