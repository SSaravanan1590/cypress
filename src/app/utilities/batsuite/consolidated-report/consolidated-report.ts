import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../../../global.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor, process, State } from '@progress/kendo-data-query';
import { GridComponent } from '@progress/kendo-angular-grid';
import { ColumnComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-consolidated-report',
  imports: [GridComponent, ColumnComponent],
  templateUrl: './consolidated-report.html',
  styleUrl: './consolidated-report.scss',
  standalone: true,
  encapsulation:ViewEncapsulation.None
})
export class ConsolidatedReport implements OnInit {
  data : any = [
      {
        "id": 1,
        "build_number": "123",
        "job_name": "Nightly Job",
        "tenant_id": "tenant_001",
        "environment": "PROD",
        "job_status": "SUCCESS",
        "job_type": "Batch",
        "module": "Payments",
        "executed_by": "jdoe",
        "reason": "Routine execution",
        "executed_on": "2024-11-12T13:37:28.634Z",
        "report": "Report link",
        "sprint_version": "Sprint_42"
      },
      {
        "id": 2,
        "build_number": "123",
        "job_name": "Nightly Job",
        "tenant_id": "tenant_001",
        "environment": "PROD",
        "job_status": "SUCCESS",
        "job_type": "Batch",
        "module": "Payments",
        "executed_by": "jdoe",
        "reason": "Routine execution",
        "executed_on": "2024-11-12T13:41:29.044Z",
        "report": "Report link",
        "sprint_version": "Sprint_42"
      },
      {
        "id": 3,
        "build_number": "123",
        "job_name": "Nightly Job",
        "tenant_id": "tenant_001",
        "environment": "PROD",
        "job_status": "SUCCESS",
        "job_type": "Batch",
        "module": "Payments",
        "executed_by": "jdoe",
        "reason": "Routine execution",
        "executed_on": "2024-11-12T13:47:58.540Z",
        "report": "Report link",
        "sprint_version": "Sprint_42"
      },
      {
        "id": 4,
        "build_number": "123",
        "job_name": "Nightly Job",
        "tenant_id": "Exterro_jen",
        "environment": "PROD",
        "job_status": "SUCCESS",
        "job_type": "Batch",
        "module": "Payments",
        "executed_by": "jdoe",
        "reason": "Routine execution",
        "executed_on": "2024-11-19T15:40:26.506Z",
        "report": "Report link",
        "sprint_version": "Sprint_42"
      },
      {
        "id": 5,
        "build_number": "56",
        "job_name": "Exterro_jen",
        "tenant_id": "tenant_001",
        "environment": "PROD",
        "job_status": "SUCCESS",
        "job_type": "Batch",
        "module": "Payments",
        "executed_by": "jdoe",
        "reason": "Routine execution",
        "executed_on": "2024-11-19T15:49:04.944Z",
        "report": "Report link",
        "sprint_version": "Sprint_42"
      }
    ];
  public filter: CompositeFilterDescriptor | undefined = undefined;

     public state: State = {
    skip: 0,
    take: 10,
    filter: undefined,
    sort: []
  };

  public gridView: GridDataResult = process(this.data, this.state);

  public pageChange(event: PageChangeEvent): void {
    this.state.skip = event.skip;
    this.loadGrid();
  }

  public dataStateChange(state: State): void {
    this.state = state;
    this.loadGrid();
  }

  private loadGrid(): void {
    this.gridView = process(this.data, this.state);
  }

  constructor(public globalService: GlobalService) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Consolidated Report';
    }, 100);
  }

  ngOnInit() {
    this.loadGrid();
  }
  
}
