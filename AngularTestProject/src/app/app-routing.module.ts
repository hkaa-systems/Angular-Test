import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordCountComponent } from './word-count/word-count.component';

const routes: Routes = [
  { path: '', component: WordCountComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
