import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-continuous-integration',
  templateUrl: './continuous-integration.component.html',
  styleUrls: ['./continuous-integration.component.scss']
})
export class ContinuousIntegrationComponent implements OnInit {
  selectedScore2_1: number | null = null;
  selectedScore2_2: number | null = null;
  selectedScore2_3: number | null = null;
  selectedScore2_4: number | null = null;
  selectedScore2_5: number | null = null;
  scores: number[] = [1, 3, 5, 8, 10];

  selectedSidebarItem: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    alert('Selected Scores : ' + this.selectedScore2_1 + ' ,' + this.selectedScore2_2 + ' ,' + this.selectedScore2_3 + ' ,' + this.selectedScore2_4 + ' ,' + this.selectedScore2_5)
  }

  resetRadioButtons() {
    this.selectedScore2_1 = null;
    this.selectedScore2_2 = null;
    this.selectedScore2_3 = null;
    this.selectedScore2_4 = null;
    this.selectedScore2_5 = null;
  }

}
