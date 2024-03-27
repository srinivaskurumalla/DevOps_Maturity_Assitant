import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-configuration-management',
  templateUrl: './configuration-management.component.html',
  styleUrls: ['./configuration-management.component.scss']
})
export class ConfigurationManagementComponent implements OnInit {
  showToast: boolean = false;

  constructor(private dbService: DbService) { }
  existingData: any[] = []
  @Input() showFooter1: boolean = true
  showFooter: boolean = true
  ngOnInit(): void {
    // Fetch previously saved scores from the JSON server
    this.dbService.getDataByItemAndIdentifier('Configuration Management',).subscribe(
      (data) => {
        this.existingData = data;
        console.log('existing data', this.existingData);

      },
      (err) => {
        console.log('error', err);

      }
    )


  }
  @ViewChild('pdfDownload') pdfDownload: ElementRef | undefined;


  show(): void {
    this.showToast = true;
    setTimeout(() => this.hideToast(), 3000); // Hide toast after 3 seconds
  }

  hideToast(): void {
    this.showToast = false;
  }
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
  //   html2canvas(document.body, {
  //     scrollX: 0,
  //     scrollY: 0,
  //     windowWidth: document.documentElement.scrollWidth,
  //     windowHeight: document.documentElement.scrollHeight,
  //     width: document.documentElement.scrollWidth,
  //     height: document.documentElement.scrollHeight
  //   }).then(canvas => {
  //     // Generate the PDF
  //     this.generatePDF(canvas);
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
    { id: 10101, page: 'Configuration Management', stageDef: 'Source code management', practiceStage: 'Basic', description: 'Source code management is not done.', score: 1, value: 1, tooltip: '1', name: 'val1' },
    { id: 10101, stageDef: 'Source code management', practiceStage: 'Initial', description: 'We use source code management for application code.', score: 3, value: 3, tooltip: '3', name: 'val1' },
    { id: 10101, stageDef: 'Source code management', practiceStage: 'Developed', description: '(Initial) + We save configuration files, database scripts, and infrastructure code.', score: 5, value: 5, tooltip: '5', name: 'val1' },
    { id: 10101, stageDef: 'Source code management', practiceStage: 'Mature', description: '(Developing) + We save test projects.', score: 8, value: 8, tooltip: '8', name: 'val1' },
    { id: 10101, stageDef: 'Source code management', practiceStage: 'Optmized', description: '(Mature) + We save our builds, containers and VMs.', score: 10, value: 10, tooltip: '10', name: 'val1' },
  ];



  table2 = [
    { id: 10201, page: 'Configuration Management', stageDef: 'Source code branching strategy', practiceStage: 'Basic', description: 'We currently have no source code branching strategy.', score: 1, value: 1, tooltip: '1', name: 'val2' },
    { id: 10201, stageDef: 'Source code branching strategy', practiceStage: 'Initial', description: 'We have multiple copies of source code.', score: 3, value: 3, tooltip: '3', name: 'val2' },
    { id: 10201, stageDef: 'Source code branching strategy', practiceStage: 'Developed', description: 'We use a centralized, single point of entry for any changes we make to our code.', score: 5, value: 5, tooltip: '5', name: 'val2' },
    { id: 10201, stageDef: 'Source code branching strategy', practiceStage: 'Mature', description: 'We use a feature-branch workflow where each branch is dedicated to a feature.', score: 8, value: 8, tooltip: '8', name: 'val2' },
    { id: 10201, stageDef: 'Source code branching strategyt', practiceStage: 'Optmized', description: 'We use a robust branching structure where branches are created for features, hot-fixes and releases, leading to a trunk for final code.', score: 10, value: 10, tooltip: '10', name: 'val2' },
  ];


  selectedValues: { id: number, item: string, identifier: string, value: number }[] = []; // Array to store selected values
  updateSelectedValues(selectedValue: { id: number, item: string, identifier: string, value: number }) {
    // Update the selected values array with the emitted value
    const index = this.selectedValues.findIndex(item => item.identifier === selectedValue.identifier);
    selectedValue.item = 'Configuration Management'
    if (index !== -1) {
      this.selectedValues[index] = selectedValue;
    } else {
      this.selectedValues.push(selectedValue);
    }
    console.log('selected', this.selectedValues);

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


}
