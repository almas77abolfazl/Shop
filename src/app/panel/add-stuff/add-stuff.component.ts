import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MessageService } from 'primeng/api';
import { Stuff } from '../index';

@Component({
  selector: 'app-add-stuff',
  templateUrl: './add-stuff.component.html',
  styleUrls: ['./add-stuff.component.scss'],
  providers: [MessageService],
})
export class AddStuffComponent implements OnInit {
  entity: Stuff = {};
  constructor(
    private dbService: NgxIndexedDBService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  doSave() {
    if (!this.canSave()) {
      return;
    } else
      this.dbService.add('stuff', {
        stuffName: this.entity.stuffName,
        quantity: this.entity.quantity,
        description: this.entity.description,
        stuffPic: this.entity.stuffPic,
        price: this.entity.price,
      });
    this.messageService.add({
      severity: 'success',
      summary: 'success',
      detail: 'با موفقیت ذخیره شد !',
    });
  }

  canSave() {
    if (!this.entity.stuffName) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'عنوان کالا ضروری است !',
      });
      return false;
    } else if (!this.entity.quantity) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'موجودی ضروری است !',
      });
      return false;
    } else if (!this.entity.description) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'توضیحات ضروری است !',
      });
      return false;
    } else if (!this.entity.stuffPic) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'لطفا یک عکس برای کالا انتخاب کنید !',
      });
      return false;
    } else if (!this.entity.price) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'لطفا قیمت کالا را وارد کنید !',
      });
      return false;
    }
    return true;
  }

  onSelect(event: any) {
    let fileReader = new FileReader();
    for (let file of event.files) {
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        this.entity.stuffPic = fileReader.result;
      };
    }
  }

  onRemove(event: any) {
    this.entity.stuffPic = null;
  }
}
