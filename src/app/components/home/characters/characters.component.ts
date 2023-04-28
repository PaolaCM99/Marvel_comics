import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interface/characters/character';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersService: CharactersService) { }
  public characters: any;
  public charactersFilter: any;
  page: number = 1;
  search: string = '';



  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data: any) => {
      this.characters = data?.data?.results;
      this.charactersFilter = this.characters;
    }
    );
  }

  public applyFilter(search: string) {
    this.charactersFilter = search.length > 0 ? this.characters.filter((item: { name: string; }) => item.name.toLowerCase().includes(search.toLowerCase())) : this.characters;
  }

}
