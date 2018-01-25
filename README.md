# AngularRouting
This project is a continuation from step 2 in our series about learning Angular.
You can find step 1 [here](https://github.com/InmetaTrondheim/Angular-DotNetStarter)

The purpose of this git is to learn more about Angular routing and how to utilize it.

Up until now we're included new functionality by referencing the components directly in html such as `<app-values></app-values>`, which is not a wrong way of doing things, but what if we would like to show the value component when we access http://localhost:4200/values? Then we must implements routes which tells our application that when a user goes to a spesific address, a spesific component or module is shown.

Start by creating a new file named `app.routes.ts` in `client/src`.

The first we're going to do is to make our app compatible with Router, we won't see any changes in the browser.

- Path: is the navigation path.
- component: is the component that the navigation is referencing

```typescript
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ValuesComponent } from "./values/values.component";
import { SendValuesComponent } from "./send-values/send-values.component";

const routes: Routes = [
     { path: '', redirectTo: 'values', pathMatch: 'full' },
     { path: 'values', component: ValuesComponent },
     { path: 'sendvalue', component: SendValuesComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```

In `app.module.ts` add `AppRoutingModule` under import.
```typescript
...
import { AppRoutingModule } from './app.routes';

@NgModule({
...
  imports: [ AppRoutingModule ,
...
})
export class AppModule { }
```

In `app.component.html` replace existing code  with the following:
```html
<h1>Angular Router</h1>
  <nav>
    <a routerLink="/values" routerLinkActive="active">View values</a>
    <a routerLink="/sendvalue" routerLinkActive="active">Send values</a>
  </nav>

<router-outlet></router-outlet>
```