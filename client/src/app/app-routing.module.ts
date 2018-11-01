import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../app/signup/signup.component";
import { LoginComponent } from "../app/login/login.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { UserGuard } from "./user.guard";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    canActivate: [UserGuard],
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
