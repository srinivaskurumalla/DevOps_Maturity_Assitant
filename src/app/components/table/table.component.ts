import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any;
  @Input() identifier: string = ''; // Unique identifier for this instance of the component
  @Output() selectedValuesChange = new EventEmitter<{ id: number, item: string, identifier: string; value: number; }>(); // Event emitter to send selected value to parent

  selectedValue: number = 0;
  matchedData: any[] = []
  dataLoaded: boolean = false
  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.selectedValue = 0; // Initialize selectedValue within ngOnInit

    // console.log('name', this.data[0].page);
    // console.log('identifier', this.identifier);
    const name = this.data[0].page;
    this.dbService.getDataByItemAndIdentifier(name).subscribe(
      (data) => {
        this.matchedData = data;
        console.log('matched data in table', this.matchedData);
        this.dataLoaded = true;

        // Load saved scores
        // const savedScores = this.getSavedScores(ident);
        // console.log('saved score',savedScores);

        if (this.matchedData) {
          debugger
          this.matchedData.forEach(score => {
            const itemIndex = this.data.findIndex((d: any) => d.value === score.value);
           // console.log('index', itemIndex);

            if (itemIndex !== -1) {
              this.data[itemIndex].value = score.value;
              // console.log('dd.val', this.data[itemIndex].value)
              // console.log('identifier', this.identifier);
              // console.log('score identifier', score.identifier);

              // Set selectedValue based on the stored value
              if (this.identifier === score.identifier) {
                this.selectedValue = score.value;
              }
              //this.selectedValue = score.value;

            }
          });
        }
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  getSavedScores(identifier: string): any[] {
    // Assuming scores is the array containing the saved scores
    const savedScores = this.matchedData.find(score => score.some((s: any) => s.identifier === identifier));
    return savedScores || [];
  }



  onChange(item: any) {
    // Emit the selected value along with the identifier to the parent
    this.selectedValuesChange.emit({ id: item.id, item: '', identifier: this.identifier, value: this.selectedValue });
  }

}
