import { Component } from '@angular/core';
import { Child } from './child/child';
import { Test } from '../test/test';

@Component({
  selector: 'app-parent',
  imports: [Child,Test],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

}
