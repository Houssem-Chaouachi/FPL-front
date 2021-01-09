import { Component, OnInit } from '@angular/core';
import { SondageService } from 'src/app/services/sondage.service';

@Component({
  selector: 'app-liste-sondage',
  templateUrl: './liste-sondage.component.html',
  styleUrls: ['./liste-sondage.component.css']
})
export class ListeSondageComponent implements OnInit {
listeSujet;
  constructor(private sondage:SondageService) { }

  ngOnInit(): void {
  
      this.getsujet();
  
  }

  getsujet() {
    this.sondage.getAllSondage().subscribe((res:any)=>{
      this.listeSujet = res;
      console.log('listte', this.listeSujet);
      
    })
   }

}
