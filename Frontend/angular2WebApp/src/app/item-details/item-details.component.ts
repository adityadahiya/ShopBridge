import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Item} from '../api-service.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item = {
    id: 0,
    price: 0,
    name: '',
    description: '',
    fileName: '',
    fileType: '',
    contentType: '',
    fileDownloadURL: ''
  }
  edit = false;
  constructor(private apiServiceService: ApiServiceService, private activatedRoute: ActivatedRoute) { }
  getItemDetails(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.apiServiceService.getItemById(id).subscribe(
      result => this.item = result
    )
  }
  updateItems(): void {
  const data = {
     id: this.item.id,
     price: this.item.price,
     name: this.item.name,
     description: this.item.description,
     fileName: this.item.fileName,
     fileType: this.item.fileType,
     contentType: this.item.contentType,
      };
    this.apiServiceService.saveItem(data).subscribe(
          newItem => this.getItemDetails()
        );
  }
  ngOnInit(): void {
    this.getItemDetails();
  }

}
