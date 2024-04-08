import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
// import * as jsPDF from 'jspdf';
import 'jspdf-autotable'; // Optional for table formatting
import jsPDF from 'jspdf';
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  data: any[] = []
  cols!: Column[];

  exportColumns!: ExportColumn[];
  constructor(private dbService: DbService) { }
  data$ = this.dbService.getAllData(); // Observable returned from service
  ngOnInit(): void {
    console.log('review', this.data$.subscribe(
      (res) => {
        this.data = res
        console.log('data', this.data);

      }
    ));


    this.cols = [
      { field: 'practiceStage', header: 'Stage', customExportHeader: 'Stage' },
      { field: 'item', header: 'Name', customExportHeader: 'Name' },
      { field: 'identifier', header: 'Info', customExportHeader: 'Info' },
      { field: 'value', header: 'Score', customExportHeader: 'Score' },

    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));


  }

  // exportPdf() {
  //   import('jspdf').then((jsPDF) => {
  //     import('jspdf-autotable').then((x) => {
  //       const doc = new jsPDF.default('p', 'px', 'a4');
  //       (doc as any).autoTable(this.exportColumns, this.data);
  //       doc.save('products.pdf');
  //     });
  //   });
  // }


  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
        var doc = new jsPDF.default('p', 'px', 'a4');
        var page = 1
        // Add header
        const headerText = 'DevSecOps-Centene';
        const headerHeight = 30; // Increased header height
        const headerColor = [0, 0, 255]; // Blue color for header
        doc.setFontSize(16);
        doc.setTextColor(headerColor[0], headerColor[1], headerColor[2]); // Set header text color

        // doc.setTextColor(...headerColor); // Set header text color
        doc.text(headerText, doc.internal.pageSize.getWidth() / 2, headerHeight, { align: 'center' });

        // Add margin top to header
        const marginTopHeader = 10;
        const headerY = headerHeight + marginTopHeader;

        // Add a margin line
        const marginLineY = headerY + 5; // Adjust the Y position as needed
        const marginLineXStart = 10;
        const marginLineXEnd = doc.internal.pageSize.getWidth() - 10;
        doc.setLineWidth(0.5); // Set line width
        doc.setDrawColor(0); // Set line color to black
        doc.line(marginLineXStart, marginLineY, marginLineXEnd, marginLineY); // Draw line

        // Set styles for the table
        const styles = {
          font: 'Arial',
          fontSize: 12,
          fontStyle: 'normal',
          textColor: [0, 0, 0], // black text color
          overflow: 'linebreak', // overflow method
          cellPadding: 5, // cell padding (space between content and cell border)
          valign: 'middle', // vertical alignment
          halign: 'center', // horizontal alignment
          fillColor: [255, 255, 255], // background color for the table cells
          lineWidth: 0.1, // width of table borders
          lineColor: [0, 0, 0] // color of table borders (black)
        };

        // Set styles for the header row
        const headerStyles = {
          fillColor: [200, 200, 200], // background color for the header row
          textColor: [0, 0, 0], // black text color for header row
          fontStyle: 'bold', // bold font style for header row
        };

        // Extracting the headers from the first data object
        const headers = Object.keys(this.data[0]);

        // Mapping over the data array to exclude the 'id' field
        const body = this.data.map(({ id, ...rest }) => Object.values(rest));
        const addFooter = () => {
          const totalPages = 2; // Hardcoded total number of pages
          const footerHeight = 20; // Height of the footer
          for (let i = 1; i <= totalPages; i++) {
              doc.setPage(i); // Set current page
              doc.setFontSize(10);
              // Calculate the position for page number based on page width and height
              const pageWidth = doc.internal.pageSize.getWidth();
              const pageHeight = doc.internal.pageSize.getHeight();
              const xOffset = 10;
              const yOffset = pageHeight - 10;
      
              // Set text color to black for page numbers
              doc.setTextColor(0);
      
              doc.text(`Page ${i} of ${totalPages}`, pageWidth - xOffset, pageHeight - footerHeight / 2, { align: 'right' });
      
              // Add line to footer
              doc.setLineWidth(0.5); // Set line width
              doc.setDrawColor(0); // Set line color to black
              doc.line(marginLineXStart, pageHeight - footerHeight, marginLineXEnd, pageHeight - footerHeight); // Draw line
          }
      };
      
          (doc as any).autoTable({
          head: [this.exportColumns], // Header row
          body: body, // Table data
          startY: marginLineY + 5, // Y position to start the table (below the margin line)
          styles: styles, // Table styles
          headStyles: headerStyles, // Header row styles
          addPageContent: addFooter // Add footer with page numbers
        });

        doc.save('products.pdf'); // Save the PDF
      });
    });
  }








}
