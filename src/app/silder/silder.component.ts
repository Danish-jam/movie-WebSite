import { Component, Input, } from '@angular/core';
@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent{ 
@Input() items: any;

}


