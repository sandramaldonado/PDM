import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvcasosComponent } from './cvcasos.component';

describe('CvcasosComponent', () => {
  let component: CvcasosComponent;
  let fixture: ComponentFixture<CvcasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvcasosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvcasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
