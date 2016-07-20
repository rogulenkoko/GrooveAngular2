import {Component,OnInit,Input} from 'angular2/core';


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
    checkNote(){
        if(this.isChecked)
            this.isChecked=!this.isChecked;
        else{
            this.isChecked=!this.isChecked;
            this.loop.play();
        }
        this.start();
    }

    start(){
        while (true) {
                setTimeout(()=>{
                    console.log("asd");
                        },1000);   
        }
    }

    ngOnInit(){
        this.loop = new Audio(this.loopUrl);
    }
}