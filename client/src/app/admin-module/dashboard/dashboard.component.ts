import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
import { UserDataSource } from '../user-data-source.service';
import { AdminService } from '../data.admin.service';
import { BuzzDataSourceService } from '../buzz-data-source.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count
  bCount
  dataSource: UserDataSource
  buzzSource: BuzzDataSourceService
  displayedColumns = ['Username', 'FirstName', 'Email', 'Role', 'Edit', 'Delete']
  buzzColumns = ['Title', 'Location', 'Category', 'Price', 'funFactor', 'UpVote', 'userName', "Edit", 'Delete']

  @ViewChild('userPaginator') paginator: MatPaginator
  @ViewChild('buzzPaginator') buzzPaginator: MatPaginator

  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    this.admin.adminUserCount().subscribe(
      res => this.count = res.count
    )
    this.admin.adminBuzzCount().subscribe(
      res => this.bCount = res.count
    )
    this.dataSource = new UserDataSource(this.admin, this.paginator)
    this.dataSource.loadUsers('asc', 0, 5)
    this.buzzSource = new BuzzDataSourceService(this.admin, this.buzzPaginator)
    this.buzzSource.loadBuzzes('asc', 0, 5)
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.loadPage())
    ).subscribe()
    this.buzzPaginator.page.pipe(
      tap(() => this.loadBuzz())
    ).subscribe()
  }

  loadPage() {
    this.dataSource.loadUsers(
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize
    )
  }

  loadBuzz() {
    this.buzzSource.loadBuzzes(
      'asc',
      this.buzzPaginator.pageIndex,
      this.buzzPaginator.pageSize
    )
  }

  editUser() {

  }

  editBuzz() {

  }

}
