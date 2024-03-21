import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "node_modules/chart.js";
import { DbService } from 'src/app/services/db.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: string[] = []
  values: number[] = []
  constructor(private dbService: DbService) { }
  data: { item: string, value: number }[] = []
  ngOnInit(): void {
    const scores = this.dbService.allScores
    const sumsMap: { [item: string]: number } = {};
    debugger
    // Iterate over the data array and accumulate sums based on item
    scores.forEach(score => {
      const item = score.item;
      const value = score.value;

      // If the item already exists in the sumsMap, add to the existing sum, otherwise initialize a new sum
      sumsMap[item] = (sumsMap[item] || 0) + value;
    });


    // Convert sumsMap back to array format
    const aggregatedData = Object.entries(sumsMap).map(([item, value]) => ({
      item,
      value
    }));

    // Now 'aggregatedData' contains the aggregated data based on the sums
    console.log('aggregate', aggregatedData);
    aggregatedData.forEach(
      data => {
        this.items.push(data.item)
        this.values.push(data.value)
      }
    )
    console.log('items', this.items);
    console.log('values', this.values);

    this.RenderChart('bar','barchart');
    this.RenderChart('pie','piechart');

  }


  RenderChart(type:any, id:string) {
    new Chart(id, {
      type: type,
      data: {
        labels: ['CM', 'CI', 'CAT',],
        datasets: [{
          label: '# of Score',
          data: this.values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
