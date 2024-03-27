import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cdd',
  templateUrl: './cdd.component.html',
  styleUrls: ['./cdd.component.scss']
})
export class CDDComponent implements OnInit {

  existingData: any[] = []
  @Input() showFooter1 : boolean = true
  showFooter : boolean = true
  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getDataByItemAndIdentifier('Continuous Delivery and Deployment').subscribe(
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
    { id: 50101, page: 'Continuous Delivery and Deployment', stageDef: 'Automated acceptance tests', practiceStage: 'Basic', description: 'We don’t have any automated acceptance testing as part of our delivery. A selection of stakeholders perform manual tests and provide review/decisions.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    { id: 50101, stageDef: 'Automated acceptance tests', practiceStage: 'Initial', description: 'Automated acceptance test results, with coverage less than 100%, are provided to stakeholders for review and approval. Stakeholders usually ask for more information and results from a wider coverage of test cases.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    { id: 50101, stageDef: 'Automated acceptance tests', practiceStage: 'Developed', description: 'We use 100% coverage with automated acceptance tests as the “definition of done” for the development team.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    { id: 50101, stageDef: 'Automated acceptance tests', practiceStage: 'Mature', description: '(Developing) + Product owners/other clients will conduct their own cycle of manual assurance tests before go-live.', score: 8, value: 8, tooltip: '8', name: 'val1' },
    { id: 50101, stageDef: 'Automated acceptance tests', practiceStage: 'Optmized', description: 'Product owners/other clients accept the results of automated acceptance tests and use those to decide a go/no-go for the release.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];

  table2 = [
    { id: 50201, page: 'Continuous Delivery and Deployment', stageDef: 'Vendor-driven constraints', practiceStage: 'Basic', description: 'Our current vendor does not allow its acceptance test results to be used as an input to the go/no-go decision.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    { id: 50201, stageDef: 'Vendor-driven constraints', practiceStage: 'Initial', description: 'We have separate vendors for development of applications and acceptance testing; the development vendors are not required to either review or be responsible for the overall result of the assurance tests.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    { id: 50201, stageDef: 'Vendor-driven constraints', practiceStage: 'Developed', description: 'Vendors coordinate the test and delivery of application to QA environments in an automated fashion.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    { id: 50201, stageDef: 'Vendor-driven constraints', practiceStage: 'Mature', description: 'Vendors coordinate the test and delivery of applications to UAT/Pre-Prod environments after performing manual tests on the release candidate.', score: 8, value: 8, tooltip: '8', name: 'val2' },
    { id: 50201, stageDef: 'Vendor-driven constraints', practiceStage: 'Optmized', description: 'Vendors coordinate the test and delivery of applications to UAT/Pre-Prod environments after performing automated tests on the release candidate.', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];

  table3 = [
    { id: 50301, page: 'Continuous Delivery and Deployment', stageDef: 'Deployment pipeline', practiceStage: 'Basic', description: 'We don’t have an automated deployment pipeline.', score: 1, value: 1, tooltip: '1', name: 'val3' },
    { id: 50301, stageDef: 'Deployment pipeline', practiceStage: 'Initial', description: 'Our deployment pipeline is only automated up to the part where code is integrated using CI tools.', score: 3, value: 3, tooltip: '3', name: 'val3' },
    { id: 50301, stageDef: 'Deployment pipeline', practiceStage: 'Developed', description: 'Our deployment pipeline allows CI and deployment to test and QA environments.', score: 5, value: 5, tooltip: '5', name: 'val3' },
    { id: 50301, stageDef: 'Deployment pipeline', practiceStage: 'Mature', description: 'Our deployment pipeline has been configured to support fully automated deployment from development to production but has not been used for this purpose yet.', score: 8, value: 8, tooltip: '8', name: 'val3' },
    { id: 50301, stageDef: 'Deployment pipeline', practiceStage: 'Optmized', description: 'We have a fully automated deployment pipeline, which is configurable to include a manual approval step if needed.', score: 10, value: 10, tooltip: '10', name: 'val3' },
  ];

  table4 = [
    { id: 50401, page: 'Continuous Delivery and Deployment', stageDef: 'Deployment to production', practiceStage: 'Basic', description: 'System is taken offline using a manually conducted SOP-driven approach, followed by a step-by-step installation of the application.', score: 1, value: 1, tooltip: '1', name: 'val4' },
    { id: 50401, stageDef: 'Deployment to production', practiceStage: 'Initial', description: 'System is taken offline, followed by step-by-step installation where some steps are manual and some involve automated configuration.', score: 3, value: 3, tooltip: '3', name: 'val4' },
    { id: 50401, stageDef: 'Deployment to production', practiceStage: 'Developed', description: 'System is taken offline, followed by step-by-step installation and all steps involve automated configuration.', score: 5, value: 5, tooltip: '5', name: 'val4' },
    { id: 50401, stageDef: 'Deployment to production', practiceStage: 'Mature', description: 'System is taken offline, followed by a one-click deployment and smoke test before go-live.', score: 8, value: 8, tooltip: '8', name: 'val4' },
    { id: 50401, stageDef: 'Deployment to production', practiceStage: 'Optmized', description: 'The system is never taken down and is upgraded using automated set-ups.', score: 10, value: 10, tooltip: '10', name: 'val4' },
  ];

  table5 = [
    { id: 50501, page: 'Continuous Delivery and Deployment', stageDef: 'Deployment capabilities', practiceStage: 'Basic', description: 'We don’t have an automated deployment pipeline.', score: 1, value: 1, tooltip: '1', name: 'val5' },
    { id: 50501, stageDef: 'Deployment capabilities', practiceStage: 'Initial', description: 'Our deployment process is based on a simple copy-paste of the new build over the existing build.', score: 3, value: 3, tooltip: '3', name: 'val5' },
    { id: 50501, stageDef: 'Deployment capabilities', practiceStage: 'Developed', description: 'We use the canary-release style of deployment to production: the build is tested in a parallel production-like environment, and once it’s successful, the real production system is taken down and the application is updated.', score: 5, value: 5, tooltip: '5', name: 'val5' },
    { id: 50501, stageDef: 'Deployment capabilities', practiceStage: 'Mature', description: 'We have a no-downtime approach where we first deploy to a canary environment, test it, and on successful completion upgrade servers one at a time until the deployment is complete.', score: 8, value: 8, tooltip: '8', name: 'val5' },
    { id: 50501, stageDef: 'Deployment capabilities', practiceStage: 'Optmized', description: 'We ensure there is no downtime for our application servers through the use of Blue-Green deployment strategy.', score: 10, value: 10, tooltip: '10', name: 'val5' },
  ];
  selectedValues: { id: number, item: string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: { id: number, item: string, identifier: string, value: number }) {
    // Update the selected values array with the emitted value
    const index = this.selectedValues.findIndex(item => item.identifier === selectedValue.identifier);
    selectedValue.item = 'Continuous Delivery and Deployment'

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
