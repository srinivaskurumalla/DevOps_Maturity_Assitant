import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-download',
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.scss']
})
export class PdfDownloadComponent {
  @ViewChild('pdfPages') pdfPages: ElementRef<HTMLDivElement> | undefined;
showFooter : boolean = false
  downloadPdf() {
    if (!this.pdfPages) {
      console.error('PDF pages container reference is undefined.');
      return;
    }

    const pagesContainer = this.pdfPages.nativeElement;
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Iterate over each viewport element
    for (let i = 0; i < pagesContainer.children.length; i++) {
      const viewport = pagesContainer.children[i] as HTMLElement;
      html2canvas(viewport, { scrollY: -window.scrollY, scale: 1 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        if (i > 0) {
          pdf.addPage(); // Add new page for each viewport except the first one
        }
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        
        // Save PDF after capturing all viewports
        if (i === pagesContainer.children.length - 1) {
          pdf.save('downloaded-pdf.pdf');
        }
      }).catch(error => {
        console.error('Error generating PDF:', error);
      });
    }
}

 
}
