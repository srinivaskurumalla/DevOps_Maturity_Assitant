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
  shortCuts: string[] = []
  values: number[] = []
  totals: number[] = []

  scores: any;
  constructor(private dbService: DbService) { }
  data: { item: string, value: number }[] = []
  ngOnInit(): void {
    this.dbService.getAllData().subscribe(
      (res) => {
        console.log('res', res);
        // Initialize an empty array to store the concatenated results
        let mergedScores: any = [];

        // Iterate over each inner array in 'res'
        res.forEach(innerArray => {
          // Concatenate the current inner array with the merged array
          mergedScores = mergedScores.concat(innerArray);
        });

        // Assign the merged array to 'this.scores'
        this.scores = mergedScores;
        //const scores = this.dbService.allScores
        const sumsMap: { [item: string]: number } = {};
        debugger
        // Iterate over the data array and accumulate sums based on item
        this.scores?.forEach((score: any) => {
          const item = score.item;
          const value = score.value;

          // If the item already exists in the sumsMap, add to the existing sum, otherwise initialize a new sum
          sumsMap[item] = (sumsMap[item] || 0) + value;
        });


        // Convert sumsMap back to array format

        const aggregatedData = Object.entries(sumsMap).map(([item, value]) => {
          let totalValue;
          // Your logic to determine totalValue based on item
          switch (item) {
            case 'Configuration Management':
              totalValue = 20;
              break;
            case 'Continuous Integration':
              totalValue = 50;
              break;
            case 'Continuous Automated Testing':
              totalValue = 130;
              break;
            case 'Infrastructure as a code':
              totalValue = 20;
              break;
            case 'Continuous Delivery and Deployment':
              totalValue = 50;
              break;
            case 'Continuous Monitoring':
              totalValue = 50;
              break;
            case 'Continuous Security':
              totalValue = 60;
              break;
            default:
              totalValue = value;
          }

          return {
            item,
            value,
            totalValue
          };
        });

        // Now 'aggregatedData' contains the aggregated data based on the sums
        console.log('aggregate', aggregatedData);
        aggregatedData.forEach(
          data => {
            const itemShortCut = data.item.split(' ').map(word => word[0]).join('').toLowerCase();

            console.log('short cut', itemShortCut);

            this.shortCuts.push(itemShortCut)
            this.items.push(data.item)
            this.values.push(data.value)
            this.totals.push(data.totalValue)
          }
        )
        console.log('items', this.items);
        console.log('values', this.values);
        console.log('totals', this.totals);

        this.RenderChart('bar', 'barchart', this.values, this.totals);
        this.RenderChart('pie', 'piechart', this.values, this.totals);
        this.RenderChart('doughnut', 'doughnutchart', this.values, this.totals);
      }
    )
  }

  RenderChart(type: any, id: string, achievedScores: number[], totalScores: number[]) {
    new Chart(id, {
      type: type,
      data: {
        labels: this.shortCuts,//this.items, // Update labels as needed
        datasets: [
          
          {
            label: 'Total Score', // Label for total scores
            data: totalScores,
            
           // backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Achieved Score', // Label for achieved scores
            data: achievedScores,
            backgroundColor: 'rgba(255, 99, 132, 0.2)', 
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        // tooltips: {
        //   callbacks: {
        //     label: (tooltipItem: { index: any; yLabel: any; }, data: { labels: { [x: string]: any; }; }) => {
        //       const index = tooltipItem.index;
        //       const label = data.labels[index]; // Get the shortcut
        //       const fullName = this.items[index]; // Get the full name
        //       return `${fullName}: ${tooltipItem.yLabel}`; // Display full name along with the score
        //     }
        //   }
        // },
      }

    });
  }


 
}
