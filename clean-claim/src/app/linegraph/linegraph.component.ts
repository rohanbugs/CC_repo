import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
// import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-linegraph',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './linegraph.component.html',
  styleUrl: './linegraph.component.css'
})
export class LinegraphComponent {
  @Input() tableData: any[] = []; // Dynamic table data
  chart: any; // To store the chart instance

  constructor() {
    Chart.register(...registerables); // Register Chart.js components
  }

  ngAfterViewInit(): void {
    if (this.tableData.length) {
      this.updateChartData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData'] && this.tableData.length) {
      this.updateChartData();
    }
  }

  private updateChartData(): void {
    const graphData = this.prepareLineGraphData(this.tableData);

    const canvasElement = document.getElementById('lineChart') as HTMLCanvasElement;

    if (canvasElement) {
      // Initialize chart
      this.chart = new Chart(canvasElement, {
        type: 'line',
        data: {
          labels: graphData.labels, // Set the labels (dates)
          datasets: graphData.datasets // Set the datasets
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: graphData.xLabel || 'Date'
              },
              beginAtZero: true
            },
            y: {
              title: {
                display: true,
                text: graphData.yLabel || 'Values'
              },
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Canvas element with ID "lineChart" not found.');
    }
  }

  // Implementing the graph data preparation logic directly in the component
  private prepareLineGraphData(tableData: any[]) {
    const labels = tableData.map(row => row['date']); // Assuming 'date' is always the first column

    // Dynamically extract the other columns (excluding 'date')
    const datasets = Object.keys(tableData[0])
      .filter(key => key !== 'date')
      .map(column => ({
        label: column,
        data: tableData.map(row => row[column] || 0), // Default to 0 if data is missing
        borderColor: this.getRandomColor(),
        fill: false
      }));

    return {
      labels,
      datasets,
      xLabel: 'Date',
      yLabel: 'Values'
    };
  }

  // Utility function to generate random colors for each dataset
  private getRandomColor(): string {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
