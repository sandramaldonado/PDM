import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVLogoPage } from './cvlogo.page';

describe('CVLogoPage', () => {
  let component: CVLogoPage;
  let fixture: ComponentFixture<CVLogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVLogoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVLogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
