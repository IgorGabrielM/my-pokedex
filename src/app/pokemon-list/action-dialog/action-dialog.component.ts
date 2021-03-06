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
  @Input() selectPokemon: PokemonDetailModel;
  classicMode: boolean = true;
  isShiny: boolean = false;
  isBack: boolean = false;
  statusInfo: boolean = true

  constructor(
  ) { }

  ngOnInit() {
  }

}
