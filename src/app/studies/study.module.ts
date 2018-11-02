import { NgModule } from '@angular/core';
import { StudyIndexComponent } from './study-index/study-index.component';
import { StudyAddComponent } from './study-add/study-add.component';
import { StudyEditComponent } from './study-edit/study-edit.component';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StudyIndexComponent },
  { path: 'add', component: StudyAddComponent },
  { path: 'edit', component: StudyEditComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudyIndexComponent, StudyAddComponent, StudyEditComponent]
})
export class StudyModule { }
