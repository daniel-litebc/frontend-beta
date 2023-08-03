import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientsComponent {
  customColumns = [
    { prop: 'patientID', name: 'Patient ID' },
    { prop: 'identifier', name: 'Identifier' },
    { prop: 'dateCreated', name: 'Date Created' },
    { prop: 'dateAdded', name: 'Date Added' },
    { prop: 'dateLastModified', name: 'Date Last Modified' }
  ];

  customData = this.generatePatientsData();

  generatePatientsData() {
    const patients = [];

    for (let i = 1; i <= 100; i++) {
      const dateCreated = new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
      const dateAdded = new Date(dateCreated.getTime() + Math.floor(Math.random() * 1000000000));
      const dateLastModified = new Date(dateAdded.getTime() + Math.floor(Math.random() * 1000000000));

      patients.push({
        patientID: 'P' + i.toString().padStart(5, '0'),
        identifier: 'ID' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
        dateCreated: dateCreated.toISOString().split('T')[0],
        dateAdded: dateAdded.toISOString().split('T')[0],
        dateLastModified: dateLastModified.toISOString().split('T')[0]
      });
    }

    return patients;
  }
}