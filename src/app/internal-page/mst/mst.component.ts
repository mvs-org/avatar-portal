import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mst',
  templateUrl: './mst.component.html',
  styleUrls: ['./mst.component.scss']
})
export class MstComponent implements OnInit {

  @Input() mst: any;

  expanded = false

  constructor() { }

  ngOnInit() {
  }

  set() {
    console.log("set")
  }

}
