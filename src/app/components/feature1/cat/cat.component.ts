import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CATComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {stageDef : 'Automated Testing', practiceStage: 'Basic', description: 'Source code management is not done.', score: 1, value: 1, tooltip: '1' },
    {stageDef : 'Automated Testing', practiceStage: 'Initial', description: 'Our developers execute unit tests as part of their code writing activities.', score: 3, value: 3, tooltip: '3' },
    {stageDef : 'Automated Testing', practiceStage: 'Developed', description: '(Initial) + Automated Functional Scenario Tests', score: 5, value: 5, tooltip: '5' },
    {stageDef : 'Automated Testing', practiceStage: 'Mature', description: '(Developing) + Automated Security Tests', score: 8, value: 8, tooltip: '8' },
    {stageDef : 'Automated Testing', practiceStage: 'Optmized', description: '(Mature) + Automated Performance Tests', score: 10, value: 10, tooltip: '10' },
  ];
}
