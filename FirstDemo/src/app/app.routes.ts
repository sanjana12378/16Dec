import { Routes } from '@angular/router';
import { MyhomeComponent } from './myhome/myhome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [


    {path:"HomeLink",component:MyhomeComponent},
    {path:"AboutLink",component:AboutusComponent},
    {path:"ContactLink",component:ContactComponent},
    {path:"**",component:PagenotfoundComponent}

];
