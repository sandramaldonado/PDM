import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVCasosPage } from './cvcasos.page';

describe('CVCasosPage', () => {
  let component: CVCasosPage;
  let fixture: ComponentFixture<CVCasosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVCasosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVCasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
