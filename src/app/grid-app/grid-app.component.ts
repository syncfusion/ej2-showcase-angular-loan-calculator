import { Component, ViewEncapsulation, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { closest } from '@syncfusion/ej2-base';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { DataService } from '../data-service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid-app.component.html',
  encapsulation: ViewEncapsulation.None
})

export class TreeGridAppComponent implements AfterViewInit {

    /** Configurations for the Grid page */
    constructor(private dataService: DataService) {
    }

    @ViewChild('treegrid') treegrid!: TreeGrid;

    public yearWiseData: Object[] = this.dataService.yearWiseData;
    public format: string = 'c0';
    public balanceHideAtMedia: string = '(min-width: 750px)';
    public paymentHideAtMedia: string = '(min-width: 480px)';

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
      this.dataService.treegrid = this.treegrid;
    }
}
