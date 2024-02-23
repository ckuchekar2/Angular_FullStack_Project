import { Routes } from '@angular/router';
import { PostDataComponent } from './components/post-data/post-data.component';
import { GetAllDataComponent } from './components/get-all-data/get-all-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';

export const routes: Routes = [
    {path:'postData', component:PostDataComponent},
    {path:'', component:GetAllDataComponent},
    {path:'update/:id', component:UpdateDataComponent}
];
