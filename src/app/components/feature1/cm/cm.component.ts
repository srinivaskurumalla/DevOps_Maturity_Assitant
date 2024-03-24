import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cm',
  templateUrl: './cm.component.html',
  styleUrls: ['./cm.component.scss']
})
export class CMComponent implements OnInit {

  existingData: any[] = []

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getDataByItemAndIdentifier('Continuous Monitoring').subscribe(
      (data) => {
        this.existingData = data;
        console.log('matched data', this.existingData);

      },
      (err) => {
        console.log('error', err);

      }
    )
  }

  table1 = [
    {id: 60101,page:'Continuous Monitoring', stageDef: 'Monitoring solutions', practiceStage: 'Basic', description: 'We don’t use a monitoring solution per se. All monitoring is done by the Ops teams.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    {id: 60101, stageDef: 'Monitoring solutions', practiceStage: 'Initial', description: 'Operations team have basic monitoring tool that is used to keep an eye on basic OS-level events.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    {id: 60101, stageDef: 'Monitoring solutions', practiceStage: 'Developed', description: 'We have a robust set of monitoring capabilities including log monitoring, application monitoring, and security monitoring.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    {id: 60101, stageDef: 'Monitoring solutions', practiceStage: 'Mature', description: '(Developing) + We have a dedicated team of Site Reliability Engineers (or similar function) to use the data from monitoring solutions for analysis and hypothesis generation.', score: 8, value: 8, tooltip: '8', name: 'val1' },
    {id: 60101, stageDef: 'Monitoring solutions', practiceStage: 'Optmized', description: '(Mature) + We have tools that support generation of proactive analytical insights using techniques like MLOps and AIOps.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];

  table2 = [
    {id: 60201,page:'Continuous Monitoring', stageDef: 'Monitoring application performance', practiceStage: 'Basic', description: 'We have no application performance monitoring plans.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    {id: 60201, stageDef: 'Monitoring application performance', practiceStage: 'Initial', description: 'We run manual ad hoc checks on application performance but only at the level of the OS hosting the application.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    {id: 60201, stageDef: 'Monitoring application performance', practiceStage: 'Developed', description: 'We have the capability (in terms of tools and knowing what to measure) to get real-time access to statistics on application performance in production.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    {id: 60201, stageDef: 'Monitoring application performance', practiceStage: 'Mature', description: '(Developing) + We have the ability to isolate a problem down to the individual server, container, VM, or process causing it.', score: 8, value: 8, tooltip: '8', name: 'val2' },
    {id: 60201, stageDef: 'Monitoring application performance', practiceStage: 'Optmized', description: '(Mature) + We have the ability to track down a problem in the application all the way from the initial request made to the server down to the stored procedure level.', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];

  table3 = [
    {id: 60301,page:'Continuous Monitoring', stageDef: 'Security monitoring', practiceStage: 'Basic', description: 'We have no security monitoring in place.', score: 1, value: 1, tooltip: '1', name: 'val3' },
    {id: 60301, stageDef: 'Security monitoring', practiceStage: 'Initial', description: 'We have a manual and ad hoc process for monitoring security using basic OS and network tools.', score: 3, value: 3, tooltip: '3', name: 'val3' },
    {id: 60301, stageDef: 'Security monitoring', practiceStage: 'Developed', description: 'We have tools that can identify simple threats such as DoS attacks and phishing attacks.', score: 5, value: 5, tooltip: '5', name: 'val3' },
    {id: 60301, stageDef: 'Security monitoring', practiceStage: 'Mature', description: 'We have a suite of advanced network monitoring tools to actively identify vulnerabilities and active attacks.', score: 8, value: 8, tooltip: '8', name: 'val3' },
    {id: 60301, stageDef: 'Security monitoring', practiceStage: 'Optmized', description: 'We have a sophisticated real-time security monitoring solution where we check every payload that hits our systems, and based on statistical analysis, informs us of potential areas of vulnerability in our systems.', score: 10, value: 10, tooltip: '10', name: 'val3' },
  ];

  table4 = [
    {id: 60401,page:'Continuous Monitoring', stageDef: 'Log monitoring', practiceStage: 'Basic', description: 'We have no log monitoring in place.', score: 1, value: 1, tooltip: '1', name: 'val4' },
    {id: 60401, stageDef: 'Log monitoring', practiceStage: 'Initial', description: 'We have an ad hoc log monitoring process using basic OS tools.', score: 3, value: 3, tooltip: '3', name: 'val4' },
    {id: 60401, stageDef: 'Log monitoring', practiceStage: 'Developed', description: 'We use all the logs we collect (application server, database server, network traffic, web access) and make them accessible for analysis, though they might not all be used.', score: 5, value: 5, tooltip: '5', name: 'val4' },
    {id: 60401, stageDef: 'Log monitoring', practiceStage: 'Mature', description: '(Developing) + We make all our logs accessible to use by anyone through a central location.', score: 8, value: 8, tooltip: '8', name: 'val4' },
    {id: 60401, stageDef: 'Log monitoring', practiceStage: 'Optmized', description: '(Mature) + All our logs are saved in a central location and are indexed and tagged with metadata to make them easily accessible.', score: 10, value: 10, tooltip: '10', name: 'val4' },
  ];

  table5 = [
    {id: 60501,page:'Continuous Monitoring', stageDef: 'Alerting solution', practiceStage: 'Basic', description: 'We have no log alerting solutions in place.', score: 1, value: 1, tooltip: '1', name: 'val5' },
    {id: 60501, stageDef: 'Alerting solution', practiceStage: 'Initial', description: 'We have a system where only the team that can manage an alert are informed of the presence of problems in their module’s security or performance.', score: 3, value: 3, tooltip: '3', name: 'val5' },
    {id: 60501, stageDef: 'Alerting solution', practiceStage: 'Developed', description: 'We have a system where all teams that can/may be able to manage an alert are informed of the details of problems in a system module’s security or performance.', score: 5, value: 5, tooltip: '5', name: 'val5' },
    {id: 60501, stageDef: 'Alerting solution', practiceStage: 'Mature', description: 'We have alerting solutions that are able to provide a time-series of similarly categorized events, including event details and remediations applied.', score: 8, value: 8, tooltip: '8', name: 'val5' },
    {id: 60501, stageDef: 'Alerting solution', practiceStage: 'Optmized', description: '(Mature) + Alerting thresholds are easily modifiable, and we follow Site Reliability Engineering practices to ensure the proper SLO, SLI and Error Budgets are maintained.', score: 10, value: 10, tooltip: '10', name: 'val5' },
  ];

  selectedValues: { id: number, item: string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: { id: number, item: string, identifier: string, value: number }) {
    // Update the selected values array with the emitted value
    const index = this.selectedValues.findIndex(item => item.identifier === selectedValue.identifier);
    selectedValue.item = 'Continuous Monitoring'

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
      const matchingexistingData = this.existingData.find(score => score.id === val.id);

      if (matchingexistingData) {
        //do update
        this.dbService.updateData(val, val.id).subscribe(
          (response) => {
            console.log('Update Operation completed successfully:', response);
          },
          (error) => {
            console.error('Error occurred:', error);
          });
      }

      else {
        //do add

        this.dbService.addData(val).subscribe(
          (response) => {
            console.log('Add Operation completed successfully:', response);
          },
          (error) => {
            console.error('Error occurred:', error);
          });
      }
    })


  }
}
