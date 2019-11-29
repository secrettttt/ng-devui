import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'd-basic',
  templateUrl: './basic.component.html',
  styles: [
    `
      section {
        width: 50%;
      }
    `
  ]
})
export class BasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
