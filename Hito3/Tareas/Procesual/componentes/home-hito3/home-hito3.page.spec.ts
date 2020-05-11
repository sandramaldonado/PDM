import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeHito3Page } from './home-hito3.page';

describe('HomeHito3Page', () => {
  let component: HomeHito3Page;
  let fixture: ComponentFixture<HomeHito3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHito3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHito3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
