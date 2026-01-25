import { Component,ContentChild, ElementRef } from '@angular/core';
import { Test } from '../../test/test';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @ContentChild('para') paragraphEl:ElementRef;
  //Accesing the component from parent content projection
  @ContentChild(Test) testEl:Test;
  StylePara(){
    console.log(this.paragraphEl.nativeElement);
    console.log(this.testEl.name)
  }


}
