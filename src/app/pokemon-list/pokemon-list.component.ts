import { DataService } from '../@core/api/data.service';
import {Component, OnInit, Optional} from '@angular/core';
import {ActionDialogComponent} from "./action-dialog/action-dialog.component";
import {NbDialogRef, NbDialogService} from "@nebular/theme";
import {takeWhile} from "rxjs";
import {PokemonDetailModel} from "../@core/model/pokemon.detail";
import {FormControl} from "@angular/forms";
import {DialogService} from "../@core/api/dialog.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetailModel[] = []
  page: number = 0;
  totalPokemons: number = 0;
  search: FormControl = new FormControl('');
  isSearching = false;
  isLoading: boolean;
  searchPokemon: PokemonDetailModel = new PokemonDetailModel();
  classicMode: boolean = true;
  selectPokemon: PokemonDetailModel
  count = 0

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.loadAllPokemons();
  }

  loadAllPokemons(paginationMax: number = 0){
    this.dataService.getPokemons(12, this.page + paginationMax)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: any) => {
          this.dataService.getPokemonByName(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons)
            });
        });
    })
  }

  loadNextPage(){
    this.count += 12
    this.loadAllPokemons(this.count)
  }

  loadPreviusPage(){
    this.count -= 12
    this.loadAllPokemons(this.count)
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

  getSelectPokemon(pokemon: PokemonDetailModel){
    this.selectPokemon = pokemon
    console.log(this.selectPokemon)
  }

}
