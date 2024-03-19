import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-management',
  templateUrl: './configuration-management.component.html',
  styleUrls: ['./configuration-management.component.scss']
})
export class ConfigurationManagementComponent implements OnInit {
  selectedScore1_1: number | null = null;
  selectedScore1_2: number | null = null;
  //scores: number[] = [1, 3, 5, 8, 10];

  constructor() { }

  ngOnInit(): void {

  }

  save() {
    // Here you can access the selected scores and perform necessary actions
    console.log('Selected Score 1:', this.selectedScore1_1);
    console.log('Selected Score 2:', this.selectedScore1_2);
    alert('Selected Scores : ' + this.selectedScore1_1 + ' ,' + this.selectedScore1_2)
    // You can also send the selected scores to an API or perform other operations as needed
  }

  resetRadioButtons() {
    this.selectedScore1_1 = null; // Reset the selected value for radio button 1
    this.selectedScore1_2 = null; // Reset the selected value for radio button 2
    // this.isResetClicked = true; // Set the flag to indicate the reset button is clicked
  }
}
