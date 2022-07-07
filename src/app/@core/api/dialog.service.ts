import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  showDialog: boolean = false;
  constructor() { }
}
