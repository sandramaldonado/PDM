import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVCasosComponent } from './cvcasos.component';

describe('CVCasosComponent', () => {
  let component: CVCasosComponent;
  let fixture: ComponentFixture<CVCasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVCasosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
