import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partner } from '@zenklub/data';
import { environment } from '../../../../apps/zenklub/src/environments/environment';
@Injectable({ providedIn: 'root' })
export class PartnerService {
  api = environment.api;
  constructor(private httpClient: HttpClient) {}

  getHours() {
    return this.httpClient.get<string[]>(this.api + '/hours');
  }
  getPartners() {
    return this.httpClient.get<Partner[]>(this.api + '/partner');
  }
}
