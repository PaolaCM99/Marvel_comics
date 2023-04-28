import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalService } from 'src/app/services/localStorage/storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() hideModal = new EventEmitter<boolean>()
  @Input() comic: any;

  ListFav: any[] = [];
  addedFav: boolean = false;

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.isAdded()
  }

  public closeModal(value: boolean) {
    this.hideModal.emit(value);
  }

  public saveFav() {
    if (this.localService.getData() !== null) {
      this.localService.getData().forEach((element: any) => {
        this.addedFav = element === this.comic.title ? true : false
        this.ListFav.push(element)
      });
    }

    this.ListFav.push(this.comic.title)
    const dataArr = new Set(this.ListFav);
    this.localService.saveData([...dataArr])

    this.isAdded()
  }

  public isAdded() {
    this.ListFav.forEach((element: any) => {
      this.addedFav = element === this.comic.title ? true : false
    });
  }
}
