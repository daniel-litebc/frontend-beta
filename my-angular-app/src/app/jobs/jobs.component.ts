import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  customColumns = [
    { prop: 'jobID', name: 'Job ID' },
    { prop: 'title', name: 'Title' },
    { prop: 'datePosted', name: 'Date Posted' },
    { prop: 'company', name: 'Company' },
    { prop: 'location', name: 'Location' },
    { prop: 'salary', name: 'Salary' }
  ];

  customData = this.generateJobsData();

  generateJobsData() {
    const jobs = [];
  
    for (let i = 1; i <= 100; i++) {
      const datePosted = new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
  
      jobs.push({
        jobID: 'J' + i.toString().padStart(5, '0'),
        title: 'Job Title ' + i,
        datePosted: datePosted.toISOString().split('T')[0],
        company: 'Company ' + (i % 10 + 1), // Example to vary companies
        location: 'Location ' + (i % 5 + 1), // Example to vary locations
        salary: (Math.random() * 70000 + 30000).toFixed(2) // Random salary between 30000 and 100000
      });
    }
  
    return jobs;
  }
  

}
