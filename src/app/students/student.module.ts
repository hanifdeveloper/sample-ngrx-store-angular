import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { StudentIndexComponent } from './student-index/student-index.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: StudentIndexComponent
  },
  {
    path: 'add', component: StudentAddComponent
  },
  {
    path: 'edit', component: StudentEditComponent
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentIndexComponent, StudentAddComponent, StudentEditComponent]
})
export class StudentModule { }
