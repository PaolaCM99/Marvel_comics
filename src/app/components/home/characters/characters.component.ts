import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interface/characters/character';
import { CharactersService } from 'src/app/services/characters/characters.service';
import { LocalService } from 'src/app/services/localStorage/storage.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersService: CharactersService, private localService: LocalService) { }
  public characters: any;
  public charactersFilter: any;
  listFav: any[] = [];
  page: number = 1;
  search: string = '';
  sortBy: string = 'desc';
  totalItems: number = 0;
  offset = 0;
  limit = 100;
  emptyList = false;

  ngOnInit(): void {
    this.getAllCharacters();
  }


  private getAllCharacters() {
    this.charactersService.getAllCharacters(this.offset).subscribe((data: any) => {
      this.totalItems = data?.data?.total;
      this.characters = data?.data?.results;
      this.charactersFilter = this.characters;
    }
    );
    this.listFav = this.localService.getData();
  }

  public applyFilter(search: string) {
    this.charactersFilter = search.length > 0 ? this.characters.filter((item: { name: string; }) => item.name.toLowerCase().includes(search.toLowerCase())) : this.characters;
  }

  public orderBy() {
    if (this.sortBy === 'asc') {
      this.charactersFilter.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));
    } else {
      this.charactersFilter.sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name));
    }
  }


  loadMoreCharacters() {
    this.offset += this.limit;
    this.getAllCharacters();
  }

  deleteFav(item:any){
    this.listFav.splice(this.listFav.indexOf(item), 1);
    this.localService.saveData(this.listFav);
    this.listFav = this.localService.getData();
    this.emptyList=this.listFav.length!==0?true:false
  }

}
