import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loginhito3Component } from './loginhito3.component';

describe('Loginhito3Component', () => {
  let component: Loginhito3Component;
  let fixture: ComponentFixture<Loginhito3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loginhito3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loginhito3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
