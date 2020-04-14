import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlCategory = '/api/categorys/';
  constructor(private network: NetworkService) {}

  getListCategory() {
    return this.network.get(this.urlCategory);
  }
}
