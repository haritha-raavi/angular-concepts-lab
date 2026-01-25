import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header-component/header-component';
import { TopHeader } from './top-header/top-header';
import { Container} from './container/container';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,TopHeader,Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-ekart');
}
