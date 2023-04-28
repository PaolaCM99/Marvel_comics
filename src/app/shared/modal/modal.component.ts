import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.comic)
  }
  @Output() hideModal = new EventEmitter<boolean>()
  @Input() comic: any;

  closeModal(value: boolean) {
    this.hideModal.emit(value);
  }
}
