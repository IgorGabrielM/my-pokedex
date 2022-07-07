import {Component, Input, OnInit, Optional} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {PokemonDetailModel} from "../../@core/model/pokemon.detail";
import {DialogService} from "../../@core/api/dialog.service";

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent implements OnInit {

  constructor(
    public dialogService: DialogService,
  ) { }

  ngOnInit() {
  }

}
