import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() character: any;
  constructor(private charactersService: CharactersService) { }
  showModal = false;
  comicData: any;
  ngOnInit(): void {
  }

  public searchComic(comic: any): void {

    this.charactersService.getComic(comic.resourceURI).subscribe((data: any) => {
      if (data.data.results[0]) {
        this.character.comic = data.data.results[0];
        this.comicData=data.data.results[0];
        this.showModal = true;
      }
    }
    );
  }
  public closeModal(hide: boolean) {
    this.showModal = !hide;
  }
}
