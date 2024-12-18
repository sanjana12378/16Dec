import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { BhavanaComponent } from './bhavana/bhavana.component';
import { StudentModule } from './student/student.module';
// import { LoginPageComponent } from './login-page/login-page.component';
// import { SanjanaComponent } from './sanjana/sanjana.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BhavanaComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstDemo';
  

  a=10;
  b=10;

  name="sanjana kakade";

  display()
  {
    return this.name;
  }

  obj1={
    a:"sanjana",
    b:"nikita"
  
  }

  arr=[10,20,30,40,50];

  getName()
  {
    alert("hello student how are you");

  }

  displays(a)
  {
    alert(a);
  }

  add(a,b)
  {
    alert(Number(a)+Number(b));
  }

  

}
