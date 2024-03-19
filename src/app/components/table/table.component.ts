import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  selectedValue: number | null=  null;
  scores = [1, 3, 5, 8, 10]
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
    console.log('data', this.data);

  }



}
