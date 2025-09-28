import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'courses',component:CoursesComponent},
  {path:'signup',component:SignUpComponent},
  {path:'productDetail',component:ProductDetailPageComponent},
  {path:':id',component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
