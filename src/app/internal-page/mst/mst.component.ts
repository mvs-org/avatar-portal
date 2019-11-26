import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateImageDialogComponent } from './update-image-dialog/update-image-dialog.component'

@Component({
  selector: 'app-mst',
  templateUrl: './mst.component.html',
  styleUrls: ['./mst.component.scss']
})
export class MstComponent implements OnInit {

  @Input() mst: any
  @Input() index: number
  @Input() selected: number

  expanded = false

  @Output() selectedChanged: EventEmitter<number> = new EventEmitter<number>()

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  set() {
    const dialogRef = this.dialog.open(UpdateImageDialogComponent, {
      data: this.mst
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  select() {
    if(this.selected == this.index) {
      this.selectedChanged.emit(-1)
    } else {
      this.selectedChanged.emit(this.index)
    }
  }

}
