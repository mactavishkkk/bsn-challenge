import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }

}
