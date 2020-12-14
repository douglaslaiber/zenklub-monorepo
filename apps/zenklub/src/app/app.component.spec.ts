import { MobileService } from '@zenklub/utils';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommonUiModule } from '@zenklub/common-ui';
const mobileServiceStub = { setIsMobile: jest.fn() };
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: MobileService, useValue: mobileServiceStub }],
      imports: [CommonUiModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should set mobile width', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const mobile = fixture.debugElement.injector.get(MobileService);
    const spy = spyOn(mobile, 'setIsMobile');
    const app = fixture.componentInstance;

    expect(spy).toBeCalledTimes(0);
    app.ngOnInit();
    expect(spy).toBeCalled();
  });
  it('should listen to window resize', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const mobile = fixture.debugElement.injector.get(MobileService);
    const spy = spyOn(mobile, 'setIsMobile');
    const app = fixture.componentInstance;
    fixture.whenStable().then((_) => {
      expect(spy).toBeCalledTimes(0);
      app.ngOnInit();
      tick(301);
      window.dispatchEvent(new Event('resize'));
      tick(301);
      window.dispatchEvent(new Event('resize'));
      tick(301);
      window.dispatchEvent(new Event('resize'));
      tick(1000);
      expect(spy).toBeCalledTimes(4);
    });
  }));
});
