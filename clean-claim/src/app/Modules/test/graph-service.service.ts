import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  // Prepare the graph data with labels for axes
  prepareLineGraphData(data: any[]): any {
    const xLabel = data[0].xLabel;
    const yLabel = data[0].yLabel;

    const labels = data.slice(1).map(item => item.x); // Extract x values
    const dataSet = data.slice(1).map(item => item.y); // Extract y values

    return {
      labels,
      datasets: [
        {
          label: yLabel,
          data: dataSet,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }
      ],
      xLabel,
      yLabel // Pass the axis labels separately if needed
    };
  }
}
