import { DataService } from '../@core/api/data.service';
import {Component, OnInit, Optional} from '@angular/core';
import {ActionDialogComponent} from "./action-dialog/action-dialog.component";
import {NbDialogRef, NbDialogService} from "@nebular/theme";
import {takeWhile} from "rxjs";
import {PokemonDetailModel} from "../@core/model/pokemon.detail";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetailModel[] = []
  page: number = 0;
  totalPokemons: number = 0;
  alive: boolean = true;
  search: FormControl = new FormControl('');
  isSearching = false;
  isLoading: boolean;
  searchPokemon: PokemonDetailModel = new PokemonDetailModel();
  classicMode: boolean = true;

  constructor(
    private dialogService: NbDialogService,
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
          this.dataService.getPokemonByName(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons[0])
            });
        });
    })
  }

  onSearchPokemon(): void {
    const name = this.search.value;
    if(name === '') {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      this.isLoading = true;
      this.dataService.getPokemonByName(name)
        .subscribe((pokemon: any) => {
          this.searchPokemon = pokemon;
          console.log(this.searchPokemon)
          this.isLoading = false;
        })
    }
  }

  managementAction() {
    this.dialogService.open(ActionDialogComponent)
      .onClose.pipe(
      takeWhile(() => this.alive)
    )
  }
}
