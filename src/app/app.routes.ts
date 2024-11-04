import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';



export const routes: Routes = [
   //Inicio Component
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {
        path: "home",
        component: HomeComponent
      },
      {
        path: "projects",
        component: ProjectsComponent
      },
      {
        path: "contact",
        component: ContactComponent
      }
];
