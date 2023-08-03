import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { JobsComponent } from './jobs/jobs.component';
import { RecordingsComponent } from './recordings/recordings.component';

const routes: Routes = [
  {path: 'patients', component: PatientsComponent},
  {path: 'recordings', component: RecordingsComponent},
  {path: 'jobs', component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
