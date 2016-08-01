import {Component,OnInit,Input,ViewChild} from 'angular2/core';
import {SliderComponent} from './slider.component';


@Component({
    selector: 'notes',
    templateUrl:"app/templates/notes.template.html",
    directives:[SliderComponent]
})
export class NotesComponent implements OnInit{
    @Input() loopUrl;
    @Input() indexNumber=0;
    @Input() tempo;
    @Input() size;
    @Input() isMore;
    @Input() isQuarter;
    loop;
    groove;
    isChecked;
    volumeIsOpen=false;
    @ViewChild (SliderComponent) slider : SliderComponent;
    ngOnInit(){
        if(this.loopUrl!=undefined)
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

    SetVolume($event?){
        if(this.isChecked){
            if($event==undefined)
                this.volumeIsOpen=!this.volumeIsOpen;
            else{
                this.loop.volume=$event.volume/100;
                this.slider.slideValue=this.loop.volume;
            }
                
        }
    }

    CheckNote(){
        if(this.loopUrl!=undefined){
            if(this.isChecked){
                this.isChecked=!this.isChecked;
                this.volumeIsOpen=false;
            }
                
            else{
                this.isChecked=!this.isChecked;
                this.loop.play();
            }
        }
    }

    LocalPlay(){
        if(this.loopUrl!=undefined){
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