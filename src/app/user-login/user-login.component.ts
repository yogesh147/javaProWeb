import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";

import { GridSizeChangedEvent } from 'ag-grid-community';
import { ToastaService } from 'ngx-toasta';
import { Toaster } from '../toaster/toaster.service';


@Component({
  selector: 'jhi-user-login',
  templateUrl: './user-login.component.html',
})

export class UserLoginComponent implements OnInit {

  formats: any = [];
  industryType: any;
  defaultSite: any;
  siteToDefault: any;

  columnDefs: any;
  defaultColDef: any;
  rowData: any;
  gridData: any;
  columnData: any;
  defaultColDefs: any;
  users: any;

  constructor(
    private toaster: Toaster,
    private toastaService: ToastaService,
    // private datePipe: DatePipe,
    // private http: HttpClient,
  ) { }

  ngOnInit() {
    this.loadAll();
    this.setGridFilter();
  }

  setGridFilter() {
    this.columnDefs = [
      {
        headerName: 'User', field: 'name', cellRenderer: (param:any) => this.getUserName(param), width: 250,
        filter: "agTextColumnFilter"
      },

    ];

    this.defaultColDef = {
      sortable: true,
      editable: false,
      resizable: true,
    };
  }

  onGridReady(params:any) {
    this.gridData = params.api;
    this.columnData = params.columnApi;
    setTimeout(() => {
      this.gridData.sizeColumnsToFit();
    }, 50);
  }

  onBtnExport() {

    let colIds:any = [];
    let displayedCol = this.columnData.columnController.allDisplayedColumns;
    displayedCol.forEach((col:any) => {
      colIds.push(col.colId);
    })
    colIds.pop();
    let params = {
      onlySelected: false,
      columnKeys: colIds,
      allColumns: false,
      fileName: 'user.csv',
      skipHeader: false,
      suppressQuotes: true,
      columnSeparator: ', ',
      skipFooters: false,
      customHeader: 'User List' + '\n',
      customFooter: '\n \n Total No.Of site :' + this.gridData.getModel().getRowCount() + ' \n'
    };


    this.gridData.exportDataAsCsv(params);
  }

  dateConvert(data:any) {
    // return this.datePipe.transform(data.value, this.formats.dateFormat);
  }

  getUserName(value:any) {
    let editLink = window.location.href + '/edit';
    let name = value.data.siteName;
    let id = value.data.id;
    let siteName = '<a href="' + editLink + '/' + id + '" >' + name + '</a>';
    return siteName;
  }



  loadAll = async () => {
    const params: any = {
      page: 0,
      size: 2000
    }
    const headers: any = {
      fields: ['siteName',
        'customerName',
        'isResidence'].join()
    }

    // try {
    //   const res = await this.http.get<any>(`api/users`, { params, headers, observe: 'response' }).toPromise()
    //   this.onSuccess(res.body);
    // } catch (error) {
    //   this.onError(error)
    // }
  }

  private onSuccess(data: any) {
    this.users = data;
  }

  private onError(error: any) {
    this.toaster.error(this.toastaService, '', 'Data' + error.error);
  }


  onGridSizeChanged(params: GridSizeChangedEvent) {
    params.api.sizeColumnsToFit();
  }

}
