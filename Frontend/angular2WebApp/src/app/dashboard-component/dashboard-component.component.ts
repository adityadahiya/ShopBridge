import { Component, OnInit } from '@angular/core';
import {ApiServiceService, Item} from '../api-service.service';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  itemList: Item[];
  modalRef: NgbModalRef;
  item: Item = {
    id: 0,
    price: 0,
    name: '',
    description: '',
    fileName: '',
    fileType: '',
    contentType: ''
  }
  file: File = null;
  constructor(private apiServiceService: ApiServiceService, private modalService: NgbModal, private router: Router) { }

  openBackDropCustomClass(content) {
      this.newItem();
      this.modalRef = this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
    saveItems(): void {
    const data = {
       id: this.item.id,
       price: this.item.price,
       name: this.item.name,
       description: this.item.description,
       file: this.file
        };
      this.apiServiceService.saveItem(data).subscribe(
            newItem => this.getItems()
          );
          this.modalRef.close();
    }
      newItem(): void {
        this.item = {
          id: 0,
          price: 0,
          name: '',
          description: '',
          fileName: '',
          fileType: '',
          contentType: '',
        };
      }
      deleteItem(id): void {
        this.apiServiceService.deleteItem(id).subscribe(
          res=> this.getItems()
        );
      }
      getItems(): void {
          this.apiServiceService.getItemList().subscribe(
            items => this.itemList = items
          );
      }
      goToItemDetails(id): void {
        this.router.navigateByUrl('/dashboard/' + id);
      }
      onChange(event) {
              this.file = event.target.files[0];
          }

  ngOnInit(): void {
    this.getItems();
  }

}
