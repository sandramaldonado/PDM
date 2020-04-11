import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvciudadComponent } from './cvciudad.component';

describe('CvciudadComponent', () => {
  let component: CvciudadComponent;
  let fixture: ComponentFixture<CvciudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvciudadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
