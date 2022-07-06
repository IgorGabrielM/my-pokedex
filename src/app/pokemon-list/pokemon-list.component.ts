import { DataService } from '../@core/api/data.service';
import {Component, OnInit, Optional} from '@angular/core';
import {ActionDialogComponent} from "./action-dialog/action-dialog.component";
import {NbDialogRef, NbDialogService} from "@nebular/theme";
import {takeWhile} from "rxjs";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: any[] = []
  page: number = 0;
  totalPokemons: number = 0;
  alive: boolean = true

  constructor(
    @Optional() private dialogService: NbDialogService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.loadAllPokemons();
  }

  loadAllPokemons(){
    this.dataService.getPokemons(15, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons[0])
            });
        });
    })
  }

  managementAction() {
    this.dialogService.open(ActionDialogComponent)
      .onClose.pipe(
      takeWhile(() => this.alive)
    )
  }

}
