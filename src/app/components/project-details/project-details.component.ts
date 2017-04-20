import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ProjectDetailsComponent>, @Inject(MD_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

}
