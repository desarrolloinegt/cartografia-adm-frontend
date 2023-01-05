import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiutilsService {
  private loader: any;
  private toaster: any;
  private alert: any;

  constructor() {}


  async closeLoading() {
    await this.loader.dismiss();
  }
}
