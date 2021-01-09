import { Component, OnInit } from '@angular/core';
import { SondageService } from 'src/app/services/sondage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-sujet',
  templateUrl: './add-sujet.component.html',
  styleUrls: ['./add-sujet.component.css']
})
export class AddSujetComponent implements OnInit {
  token = localStorage.getItem('token') ;
  sujetForm:FormGroup
  constructor(private sondage:SondageService) { }

  ngOnInit(): void {
    this.sujetForm = new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    })
  }
addSujet(){
  this.sondage.addSujet(this.sujetForm.value).subscribe((res: any) => {
    console.log('this is resssss',res);
  })
    
}
}
