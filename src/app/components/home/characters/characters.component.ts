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
  public characters:any;

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((data: any) => {

      this.characters = data?.data?.results;
      console.log(this.characters);
    }
    );
  }

}
