import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit{

  personId !: any
  selectedPerson: any
  constructor(private apiService: MovieService, private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.personId = this.router.snapshot.paramMap.get('id');
    console.log(this.personId);
    
    this.apiService.getPersonDetails(this.personId).subscribe((res ) =>{
    this.selectedPerson = res
    console.log(res);
    
    })
}
}
