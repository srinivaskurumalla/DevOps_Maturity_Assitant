import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-configuration-management',
  templateUrl: './configuration-management.component.html',
  styleUrls: ['./configuration-management.component.scss']
})
export class ConfigurationManagementComponent implements OnInit {
 
  constructor(private dbService:DbService) { }

  ngOnInit(): void {

  }
  table1 = [
    { stageDef: 'Source code management', practiceStage: 'Basic', description: 'Source code management is not done.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    { stageDef: 'Source code management', practiceStage: 'Initial', description: 'We use source code management for application code.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    { stageDef: 'Source code management', practiceStage: 'Developed', description: '(Initial) + We save configuration files, database scripts, and infrastructure code.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    { stageDef: 'Source code management', practiceStage: 'Mature', description: '(Developing) + We save test projects.', score: 8, value: 8, tooltip: '8', name: 'val1' },
    { stageDef: 'Source code management', practiceStage: 'Optmized', description: '(Mature) + We save our builds, containers and VMs.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];

  
  
  table2 = [
    { stageDef: 'Source code branching strategy', practiceStage: 'Basic', description: 'We currently have no source code branching strategy.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    { stageDef: 'Source code branching strategy', practiceStage: 'Initial', description: 'We have multiple copies of source code.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    { stageDef: 'Source code branching strategy', practiceStage: 'Developed', description: 'We use a centralized, single point of entry for any changes we make to our code.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    { stageDef: 'Source code branching strategy', practiceStage: 'Mature', description: 'We use a feature-branch workflow where each branch is dedicated to a feature.', score: 8, value: 8, tooltip: '8', name: 'val2' },
    { stageDef: 'Source code branching strategyt', practiceStage: 'Optmized', description: 'We use a robust branching structure where branches are created for features, hot-fixes and releases, leading to a trunk for final code.', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];
  
  
  selectedValues: {item:string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: {item:string, identifier: string, value: number }) {
    // Update the selected values array with the emitted value
    const index = this.selectedValues.findIndex(item => item.identifier === selectedValue.identifier);
    selectedValue.item = 'Configuration Management'
    if (index !== -1) {
      this.selectedValues[index] = selectedValue;
    } else {
      this.selectedValues.push(selectedValue);
    }
    console.log('selected', index);

  }
  saveAll() {
    // You can implement the logic to save all selected values here
    console.log('All selected values:', this.selectedValues);
    this.selectedValues.forEach(val => {
            this.dbService.allScores.push(val)

    });

    console.log('servive scores',this.dbService.allScores);
    
  }
}
