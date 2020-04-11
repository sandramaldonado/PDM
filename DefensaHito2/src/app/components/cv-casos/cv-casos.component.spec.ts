import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvCasosComponent } from './cv-casos.component';

describe('CvCasosComponent', () => {
  let component: CvCasosComponent;
  let fixture: ComponentFixture<CvCasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCasosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
