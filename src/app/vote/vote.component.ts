import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SondageService } from '../services/sondage.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  id: string;
  voteSondage;
  choix: string;
  voteForm:FormGroup
  constructor(private sondage:SondageService, private _Activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params["id"];
    this.getOneSondage()
    console.log('idvote',this.id);
        this.voteForm = new FormGroup({
      choix: new FormControl(""),
    });
  }
  getOneSondage() {
    this.sondage
      .getSondageById(this.id)
      .subscribe((data: { title; description }) => {
        this.voteSondage = data;
        console.log('this is vote', this.voteSondage);
        
      });
  }
  voter(){
    this.sondage.vote(this.id, this.voteForm.value).subscribe(()=>{
      this.router.navigate(['/'])
     
      
    })
  }
}
