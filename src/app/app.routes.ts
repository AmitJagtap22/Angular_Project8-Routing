import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path:'',
        component:WelcomeComponent
    },
    {
        path:'Technologies',
        component:TechnologiesComponent
    },
    {
        path:'Books',
        component:BooksComponent
    },
    {
        path:"**",
        component:InvalidComponent
    }
];
