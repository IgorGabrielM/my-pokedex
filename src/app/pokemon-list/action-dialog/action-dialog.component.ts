import {Component, OnInit, Optional} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent implements OnInit {

  constructor(
    @Optional() private dialogRef: NbDialogRef<string>,
  ) { }

  ngOnInit() {
  }

  modalClose(refresh?: boolean) {
    this.dialogRef.close(refresh);
  }


}
