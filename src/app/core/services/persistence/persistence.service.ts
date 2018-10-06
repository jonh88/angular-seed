import { Injectable } from '@angular/core';
import { STORE_PREFIX } from '@ds-core/constants';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  getItem(itemName: string): any {
    return JSON.parse( sessionStorage.getItem( STORE_PREFIX + itemName ) );
  }

  setItem(itemName: string, item: any) {
      sessionStorage.setItem( STORE_PREFIX + itemName, JSON.stringify(item) );
  }

  removeItem(itemName: string) {
      sessionStorage.removeItem( STORE_PREFIX + itemName );
  }

}
