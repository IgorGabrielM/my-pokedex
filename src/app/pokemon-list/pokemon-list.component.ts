import { DataService } from '../@core/api/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: any[] = []
  page: number = 1;
  totalPokemons: number = 0;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.loadAllPokemons();
  }

  loadAllPokemons(){
    this.dataService.getPokemons(15, this.page + 1)
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

}
