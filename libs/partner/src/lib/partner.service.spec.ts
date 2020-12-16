/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, flush } from '@angular/core/testing';
import { PartnerService } from './partner.service';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { marbles } from 'rxjs-marbles/jest';
import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

let service: PartnerService;
const httpClientStub = {
  get: jest.fn(),
};
describe('Service: Partner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PartnerService,
        { provide: HttpClient, useValue: httpClientStub },
      ],
    });
  });
  beforeEach(() => {
    service = TestBed.inject(PartnerService);
  });

  it('should ...', inject([PartnerService], (service: PartnerService) => {
    service.api = 'api';
    expect(service).toBeTruthy();
  }));
  it('should call getHours correctly', inject(
    [PartnerService],
    (service: PartnerService) => {
      service.api = 'api';
      const arr = ['08:00', '09:00'];
      const spy = jest.spyOn(httpClientStub, 'get').mockReturnValue(of([]));
      service.getHours().subscribe();
      expect(spy).toBeCalledWith('api/hours');
    }
  ));
  it('should call getPartner correctly', inject(
    [PartnerService],
    (service: PartnerService) => {
      jest.clearAllMocks();

      service.api = 'api';
      const spy = jest.spyOn(httpClientStub, 'get').mockReturnValue(of(null));
      service.getPartners().subscribe();
      expect(spy).toBeCalledWith('api/partner');
    }
  ));

  it(
    'getHours should have correct values',
    marbles((m) => {
      jest.clearAllMocks();

      jest.spyOn(httpClientStub, 'get').mockReturnValue(from(['a']));
      service.getHours().subscribe((val) => {
        expect(val).toEqual([]);
      });
    })
  );
});
