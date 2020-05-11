import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdmComponent } from './pdm.component';

describe('PdmComponent', () => {
  let component: PdmComponent;
  let fixture: ComponentFixture<PdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
