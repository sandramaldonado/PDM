import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVlogoComponent } from './cvlogo.component';

describe('CVlogoComponent', () => {
  let component: CVlogoComponent;
  let fixture: ComponentFixture<CVlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVlogoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
