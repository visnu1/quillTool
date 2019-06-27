import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuillComponent } from './quill/quill.component';

const routes: Routes = [
  {
    path: 'quill',
    component: QuillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
