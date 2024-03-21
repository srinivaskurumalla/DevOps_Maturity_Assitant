import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any;
  @Input() identifier: string = ''; // Unique identifier for this instance of the component
  @Output() selectedValuesChange = new EventEmitter<{item:string, identifier: string; value: number; }>(); // Event emitter to send selected value to parent

  selectedValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {    
    // Emit the selected value along with the identifier to the parent
    this.selectedValuesChange.emit({item:'', identifier: this.identifier, value: this.selectedValue });
  }
  
}
