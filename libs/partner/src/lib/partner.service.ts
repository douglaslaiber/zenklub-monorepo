import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partner } from '@zenklub/data';

@Injectable({ providedIn: 'root' })
export class PartnerService {
  constructor(private httpClient: HttpClient) {}

  getHours() {
    return this.httpClient.get<string[]>('api/hours');
  }
  getPartners() {
    return this.httpClient.get<Partner[]>('api/partner');
  }
}
