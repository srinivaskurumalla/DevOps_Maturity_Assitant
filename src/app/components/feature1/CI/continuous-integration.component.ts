import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-continuous-integration',
  templateUrl: './continuous-integration.component.html',
  styleUrls: ['./continuous-integration.component.scss']
})
export class ContinuousIntegrationComponent implements OnInit {
  existingData: any[] = []
  @Input() showFooter1 : boolean = true
  showFooter : boolean = true
  constructor( private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getDataByItemAndIdentifier('Continuous Integration').subscribe(
      (data) => {
        this.existingData = data;
        console.log('matched data', this.existingData);

      },
      (err) => {
        console.log('error', err);

      }
    )
  }


  @ViewChild('pdfDownload2') pdfDownload: ElementRef | undefined;

  downloadPdf() {
    setTimeout(() => {
      const data = this.pdfDownload!.nativeElement;
      html2canvas(data).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight()); // Add width and height parameters
        pdf.save('downloaded-pdf.pdf');
      });
    }, 1000); // Adjust the delay as needed
  }

  // captureFullPage() {
  //   // Set the height of html and body to ensure all content is visible
  //   document.documentElement.style.height = 'auto';
  //   document.body.style.height = 'auto';

  //   const fullPageHeight = document.documentElement.scrollHeight;
  //   const viewportHeight = window.innerHeight;
  //   const numScreenshots = Math.ceil(fullPageHeight / viewportHeight);

  //   let promiseArray = [];
  //   for (let i = 0; i < numScreenshots; i++) {
  //     const top = i * viewportHeight;
  //     const bottom = Math.min((i + 1) * viewportHeight, fullPageHeight);
  //     const promise = html2canvas(document.body, {
  //       scrollX: 0,
  //       scrollY: top,
  //       width: document.documentElement.scrollWidth,
  //       height: bottom - top
  //     });
  //     promiseArray.push(promise);
  //   }

  //   Promise.all(promiseArray).then((canvases) => {
  //     // Merge canvases vertically
  //     const totalHeight = canvases.reduce((acc, canvas) => acc + canvas.height, 0);
  //     const fullPageCanvas = document.createElement('canvas');
  //     fullPageCanvas.width = canvases[0].width;
  //     fullPageCanvas.height = totalHeight;
  //     const context = fullPageCanvas.getContext('2d');
  //     let offsetY = 0;
  //     canvases.forEach(canvas => {
  //       context?.drawImage(canvas, 0, offsetY);
  //       offsetY += canvas.height;
  //     });

  //     // Generate PDF
  //     this.generatePDF(fullPageCanvas);
  //   });
  // }

  // generatePDF(canvas: HTMLCanvasElement) {
  //   const imgData = canvas.toDataURL('image/png');
  //   const doc = new jsPDF('p', 'mm', 'a4');
  //   const imgWidth = doc.internal.pageSize.getWidth();
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //   doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  //   doc.save('your-file-name.pdf');
  // }


  table1 = [
    { id: 20101, page: 'Continuous Integration', stageDef: 'CI prerequisites', practiceStage: 'Basic', description: 'We have no process for CI.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    { id: 20101, stageDef: 'CI prerequisites', practiceStage: 'Initial', description: 'Developers (database and app) check in code to development branch.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    { id: 20101, stageDef: 'CI prerequisites', practiceStage: 'Developed', description: 'We have automated testing cycles run on developers work branches prior to check-in to development branch.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    { id: 20101, stageDef: 'CI prerequisites', practiceStage: 'Mature', description: 'Developers have access to standardized application build scripts and are able to execute automated tests on test data that is refreshed periodically on standardized environments.', score: 8, value: 8, tooltip: '8', name: 'val1' },
    { id: 20101, stageDef: 'CI prerequisites', practiceStage: 'Optmized', description: 'Developers have to run automated build scripts and automated tests for each check-in.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];

  table2 = [
    { id: 20201, page: 'Continuous Integration', stageDef: 'CI tools stack', practiceStage: 'Basic', description: 'No CI tools are used.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    { id: 20201, stageDef: 'CI tools stack', practiceStage: 'Initial', description: 'We have CI tools and use them with manual build settings.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    { id: 20201, stageDef: 'CI tools stack', practiceStage: 'Developed', description: 'We have CI tools and use them for scheduling automated builds.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    { id: 20201, stageDef: 'CI tools stack', practiceStage: 'Mature', description: 'We have CI tools set up in a development environment, which invoke builds and deployments on events (e.g. code changes and check-ins).', score: 8, value: 8, tooltip: '8', name: 'val2' },
    { id: 20201, stageDef: 'CI tools stack', practiceStage: 'Optmized', description: 'We have CI tools set up in all environments, which invoke builds and deployments on events (e.g. code changes and check-ins).', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];

  table3 = [
    { id: 20301, page: 'Continuous Integration', stageDef: 'Automating build processes using CI ', practiceStage: 'Basic', description: 'We have only automated builds for our development environment.', score: 1, value: 1, tooltip: '1', name: 'val3' },
    { id: 20301, stageDef: 'Automating build processes using CI ', practiceStage: 'Initial', description: '(Basic) + Build automation to all of the environments (QA and others).', score: 3, value: 3, tooltip: '3', name: 'val3' },
    { id: 20301, stageDef: 'Automating build processes using CI ', practiceStage: 'Developed', description: '(Initial) + Unit test for all layers of the application.', score: 5, value: 5, tooltip: '5', name: 'val3' },
    { id: 20301, stageDef: 'Automating build processes using CI ', practiceStage: 'Mature', description: '(Developing) + Security Tests', score: 8, value: 8, tooltip: '8', name: 'val3' },
    { id: 20301, stageDef: 'Automating build processes using CI ', practiceStage: 'Optmized', description: '(Mature) + Performance Tests', score: 10, value: 10, tooltip: '10', name: 'val3' },
  ];

  table4 = [
    { id: 20401, page: 'Continuous Integration', stageDef: 'Integration of developer code', practiceStage: 'Basic', description: 'We have no check-in or integration of code until all the features, bug fixes, etc. are completed.', score: 1, value: 1, tooltip: '1', name: 'val4' },
    { id: 20401, stageDef: 'Integration of developer code', practiceStage: 'Initial', description: 'We integrate our code daily without running any unit tests.', score: 3, value: 3, tooltip: '3', name: 'val4' },
    { id: 20401, stageDef: 'Integration of developer code', practiceStage: 'Developed', description: 'We integrate our work as soon as our smallest executable code is completed without any unit testing pre-commit.', score: 5, value: 5, tooltip: '5', name: 'val4' },
    { id: 20401, stageDef: 'Integration of developer code', practiceStage: 'Mature', description: 'We integrate our work daily after running our unit test cases and only if 100% of unit test cases for the code pass.', score: 8, value: 8, tooltip: '8', name: 'val4' },
    { id: 20401, stageDef: 'Integration of developer code', practiceStage: 'Optmized', description: 'We integrate our work as soon as the smallest executable code is completed and 100% of the unit test cases for the code pass.', score: 10, value: 10, tooltip: '10', name: 'val4' },
  ];

  table5 = [
    { id: 20501, page: 'Continuous Integration', stageDef: 'Notifications during CI', practiceStage: 'Basic', description: 'We currently take no action if our CI tool sends us an alert.', score: 1, value: 1, tooltip: '1', name: 'val5' },
    { id: 20501, stageDef: 'Notifications during CI', practiceStage: 'Initial', description: 'We immediately stop the build process and prevent other code check-in to the broken code base if build breaks due to check-in.', score: 3, value: 3, tooltip: '3', name: 'val5' },
    { id: 20501, stageDef: 'Notifications during CI', practiceStage: 'Developed', description: 'We revert back to the previous version of the last checked-in code if the build succeeds but the automated unit tests fails. However, other developers can continue to check in their code.', score: 5, value: 5, tooltip: '5', name: 'val5' },
    { id: 20501, stageDef: 'Notifications during CI', practiceStage: 'Mature', description: 'We have mechanisms in place to alert a set of team members in case the CI tool comes across either a bad build or failed unit tests.', score: 8, value: 8, tooltip: '8', name: 'val5' },
    { id: 20501, stageDef: 'Notifications during CI', practiceStage: 'Optmized', description: 'We will stop the build process for all developers if there are build failures and/or failed unit test cases. We only restart once the failures have been addressed and resolved.', score: 10, value: 10, tooltip: '10', name: 'val5' },
  ];
  selectedValues: { id: number,practiceStage : string, item: string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: { id: number,practiceStage : string, item: string, identifier: string, value: number }) {
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
      const matchingexistingData = this.existingData.find(score => score.id === val.id);

      if (matchingexistingData) {
        //do update
        this.dbService.updateData(val, val.id).subscribe(
          (response) => {
            this.dbService.showSuccess('Data Updated')
          },
          (error) => {
            console.error('Error occurred:', error);
            this.dbService.showError('Error while update')
          });
      }

      else {
        //do add

        this.dbService.addData(val).subscribe(
          (response) => {
            this.dbService.showSuccess('Data Added')

            console.log('Add Operation completed successfully:', response);
          },
          (error) => {
            this.dbService.showError('Error while saving')

            console.warn('Error occurred:', error);
          });
      }
    })


  }


  // saveAll() {
  //   // You can implement the logic to save all selected values here
  //   console.log('All selected values:', this.selectedValues);
  //   this.selectedValues.forEach(val => {
  //     this.dbService.allScores.push(val)

  //   });
  //   if (!this.dataExists) {
  //     console.log('adding data');

  //     this.selectedValues.forEach(val => {
  //       this.dbService.addData(val).subscribe(
  //         (response) => {
  //           console.log('Operation completed successfully:', response);
  //         },
  //         (error) => {
  //           console.error('Error occurred:', error);
  //         });
  //     })

  //   }
  //   else {
  //     console.log('update data');

  //     this.selectedValues.forEach(val => {
  //       this.dbService.updateData(val, val.id).subscribe(
  //         (response) => {
  //           console.log('Operation completed successfully:', response);
  //         },
  //         (error) => {
  //           console.error('Error occurred:', error);
  //         });
  //     })
  //   }
  //   console.log('service scores', this.dbService.allScores);

  // }

}
