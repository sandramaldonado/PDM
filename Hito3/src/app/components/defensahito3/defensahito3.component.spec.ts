import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Defensahito3Component } from './defensahito3.component';

describe('Defensahito3Component', () => {
  let component: Defensahito3Component;
  let fixture: ComponentFixture<Defensahito3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Defensahito3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Defensahito3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
