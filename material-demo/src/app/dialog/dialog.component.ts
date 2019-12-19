import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent,{data:{name:'Waqqar'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result:${result}`);
    });
  }

}
