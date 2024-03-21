import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-iac',
  templateUrl: './iac.component.html',
  styleUrls: ['./iac.component.scss']
})
export class IACComponent implements OnInit {

  constructor(private dbService:DbService) { }

  ngOnInit(): void {
  }


  table1 = [
    { stageDef: 'Automated provisioning', practiceStage: 'Basic', description: 'We have no automated provisioning process.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    { stageDef: 'Automated provisioning', practiceStage: 'Initial', description: 'We have manual allocation of data center assets and VMs to each application that needs it.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    { stageDef: 'Automated provisioning', practiceStage: 'Developed', description: 'We use IaaS and create on-demand infrastructure when application teams manually send us a request.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    { stageDef: 'Automated provisioning', practiceStage: 'Mature', description: 'We have automated provisioning of infrastructure via APIs but these requests are not event-driven (e.g. application is facing a scalability crunch and needs more VMs due to mitigate the risk).', score: 8, value: 8, tooltip: '8', name: 'val1' },
    { stageDef: 'Automated provisioning', practiceStage: 'Optmized', description: 'Infrastructure is provisioned/deprovisioned automatically and dynamically based on increased/decreased usage of applications.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];

  table2 = [
    { stageDef: 'Use of containers', practiceStage: 'Basic', description: 'We currently don’t use containers.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    { stageDef: 'Use of containers', practiceStage: 'Initial', description: 'We have containerized our existing monolithic applications for purposes of deployment.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    { stageDef: 'Use of containers', practiceStage: 'Developed', description: 'We have containerized individual modules and support independent provisioning of these modules.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    { stageDef: 'Use of containers', practiceStage: 'Mature', description: 'We have a microservices architecture that is containerized and has the capability to auto-scale on existing ready-to-use infrastructure.', score: 8, value: 8, tooltip: '8', name: 'val2' },
    { stageDef: 'Use of containers', practiceStage: 'Optmized', description: 'We have a microservices architecture, which is containerized, with each container having integrated auto-scale capability on dynamically provisioned infrastructure.', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];

  selectedValues: { item: string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: { item: string, identifier: string, value: number }) {
    // Update the selected values array with the emitted value
    const index = this.selectedValues.findIndex(item => item.identifier === selectedValue.identifier);
    selectedValue.item = 'Inafrastracture as a code'
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
