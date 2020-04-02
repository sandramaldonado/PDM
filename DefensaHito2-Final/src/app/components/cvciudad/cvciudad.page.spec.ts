import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVCiudadPage } from './cvciudad.page';

describe('CVCiudadPage', () => {
  let component: CVCiudadPage;
  let fixture: ComponentFixture<CVCiudadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVCiudadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVCiudadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
