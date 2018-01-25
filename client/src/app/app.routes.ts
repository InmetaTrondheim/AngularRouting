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