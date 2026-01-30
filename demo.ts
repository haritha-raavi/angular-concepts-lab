import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  SimpleChanges,
  SimpleChange,
  ElementRef,
  ViewChild,
  ContentChild,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() message: string;
  @Input() messagearray: string[]; //NgOnChanges will not raise for the input changes becoz it stores ref of array that will be constant.
  @Input() name: string;
  title: string = 'Angular Life Cycle';

  @ViewChild('temp') tempRef: ElementRef;
  @ContentChild('temp') childRef: ElementRef;

  constructor() {
    console.log('Demo constructor called');
    // console.log("Title:",this.title);
    // console.log("Message:",this.message);
  }

  //Called when after component created and only after input variable updated
  ngOnChanges() {
    console.log('ngonChanges Hook Called');
    // console.log("Message:",this.message);
  }

  //If we want the previous value of @Input
  // ngOnChanges(changes:SimpleChanges){
  //   console.log("ngonChanges Called");
  //   console.log(changes);
  //   const msg = changes['message'];
  //   console.log(msg['currentValue']);
  //   console.log(msg['previousValue']);
  //   console.log(msg['firstChange']);
  // }

  //More than one input variable
  // ngOnChanges(changes: SimpleChanges): void {
  //    console.log("ngonChanges Called");
  //   for(let inputVariable in changes){
  //     const change:SimpleChange = changes[inputVariable]
  //     console.log("Property Name:",inputVariable)
  //     console.log(change['currentValue']);
  //     console.log(change['firstChange']);
  //     console.log(change['previousValue']);
  //   }
  // }

  ngOnInit() {
    console.log('ngOnInit Hook Called');
    //Because by the time ngoninit called view child/children and content child/children not available
    // console.log(this.tempRef.nativeElement.value  );  // Throughs ERROR TypeError: Cannot read properties of undefined (reading 'nativeElement')
  }

  ngDoCheck() {
    console.log('ngDoCheck Hook Called');
    // console.log("In ngDoCheck",this.childRef);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Hook called');
    // console.log("In ngAfterContentInit",this.childRef.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Hook Called');
    // console.log('In ngAfterContentChecked', this.childRef.nativeElement);
    // console.log('In ngAfterContentChecked', this.tempRef);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Hook called');
    // console.log('In ngAfterViewInit', this.tempRef.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Hook called');
    // console.log('In ngAfterViewChecked', this.tempRef.nativeElement);
  }
  ngOnDestroy(){
    console.log('ngOnDestroy Hook Called');
  }
}
