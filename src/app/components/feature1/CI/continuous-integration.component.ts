import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-continuous-integration',
  templateUrl: './continuous-integration.component.html',
  styleUrls: ['./continuous-integration.component.scss']
})
export class ContinuousIntegrationComponent implements OnInit {
  
  selectedSidebarItem: string = ''
  constructor(private router: Router,private dbService:DbService) { }

  ngOnInit(): void {
  }
  
  table1 = [
    { stageDef: 'CI prerequisites', practiceStage: 'Basic', description: 'We have no process for CI.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    { stageDef: 'CI prerequisites', practiceStage: 'Initial', description: 'Developers (database and app) check in code to development branch.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    { stageDef: 'CI prerequisites', practiceStage: 'Developed', description: 'We have automated testing cycles run on developers work branches prior to check-in to development branch.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    { stageDef: 'CI prerequisites', practiceStage: 'Mature', description: 'Developers have access to standardized application build scripts and are able to execute automated tests on test data that is refreshed periodically on standardized environments.', score: 8, value: 8, tooltip: '8', name: 'val1' },
    { stageDef: 'CI prerequisites', practiceStage: 'Optmized', description: 'Developers have to run automated build scripts and automated tests for each check-in.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];

  table2 = [
    { stageDef: 'CI tools stack', practiceStage: 'Basic', description: 'No CI tools are used.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    { stageDef: 'CI tools stack', practiceStage: 'Initial', description: 'We have CI tools and use them with manual build settings.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    { stageDef: 'CI tools stack', practiceStage: 'Developed', description: 'We have CI tools and use them for scheduling automated builds.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    { stageDef: 'CI tools stack', practiceStage: 'Mature', description: 'We have CI tools set up in a development environment, which invoke builds and deployments on events (e.g. code changes and check-ins).', score: 8, value: 8, tooltip: '8', name: 'val2' },
    { stageDef: 'CI tools stack', practiceStage: 'Optmized', description: 'We have CI tools set up in all environments, which invoke builds and deployments on events (e.g. code changes and check-ins).', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];

  table3 = [
    { stageDef: 'Automating build processes using CI ', practiceStage: 'Basic', description: 'We have only automated builds for our development environment.', score: 1, value: 1, tooltip: '1', name: 'val3' },
    { stageDef: 'Automating build processes using CI ', practiceStage: 'Initial', description: '(Basic) + Build automation to all of the environments (QA and others).', score: 3, value: 3, tooltip: '3', name: 'val3' },
    { stageDef: 'Automating build processes using CI ', practiceStage: 'Developed', description: '(Initial) + Unit test for all layers of the application.', score: 5, value: 5, tooltip: '5', name: 'val3' },
    { stageDef: 'Automating build processes using CI ', practiceStage: 'Mature', description: '(Developing) + Security Tests', score: 8, value: 8, tooltip: '8', name: 'val3' },
    { stageDef: 'Automating build processes using CI ', practiceStage: 'Optmized', description: '(Mature) + Performance Tests', score: 10, value: 10, tooltip: '10', name: 'val3' },
  ];

  table4 = [
    { stageDef: 'Integration of developer code', practiceStage: 'Basic', description: 'We have no check-in or integration of code until all the features, bug fixes, etc. are completed.', score: 1, value: 1, tooltip: '1', name: 'val4' },
    { stageDef: 'Integration of developer code', practiceStage: 'Initial', description: 'We integrate our code daily without running any unit tests.', score: 3, value: 3, tooltip: '3', name: 'val4' },
    { stageDef: 'Integration of developer code', practiceStage: 'Developed', description: 'We integrate our work as soon as our smallest executable code is completed without any unit testing pre-commit.', score: 5, value: 5, tooltip: '5', name: 'val4' },
    { stageDef: 'Integration of developer code', practiceStage: 'Mature', description: 'We integrate our work daily after running our unit test cases and only if 100% of unit test cases for the code pass.', score: 8, value: 8, tooltip: '8', name: 'val4' },
    { stageDef: 'Integration of developer code', practiceStage: 'Optmized', description: 'We integrate our work as soon as the smallest executable code is completed and 100% of the unit test cases for the code pass.', score: 10, value: 10, tooltip: '10', name: 'val4' },
  ];

  table5 = [
    { stageDef: 'Notifications during CI', practiceStage: 'Basic', description: 'We currently take no action if our CI tool sends us an alert.', score: 1, value: 1, tooltip: '1', name: 'val5' },
    { stageDef: 'Notifications during CI', practiceStage: 'Initial', description: 'We immediately stop the build process and prevent other code check-in to the broken code base if build breaks due to check-in.', score: 3, value: 3, tooltip: '3', name: 'val5' },
    { stageDef: 'Notifications during CI', practiceStage: 'Developed', description: 'We revert back to the previous version of the last checked-in code if the build succeeds but the automated unit tests fails. However, other developers can continue to check in their code.', score: 5, value: 5, tooltip: '5', name: 'val5' },
    { stageDef: 'Notifications during CI', practiceStage: 'Mature', description: 'We have mechanisms in place to alert a set of team members in case the CI tool comes across either a bad build or failed unit tests.', score: 8, value: 8, tooltip: '8', name: 'val5' },
    { stageDef: 'Notifications during CI', practiceStage: 'Optmized', description: 'We will stop the build process for all developers if there are build failures and/or failed unit test cases. We only restart once the failures have been addressed and resolved.', score: 10, value: 10, tooltip: '10', name: 'val5' },
  ];
  selectedValues: { item: string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: { item: string, identifier: string, value: number }) {
    // Update the selected values array with the emitted value
    const index = this.selectedValues.findIndex(item => item.identifier === selectedValue.identifier);
    selectedValue.item = 'Continuous Integration'

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

    console.log('servive scores', this.dbService.allScores);

  }

}
