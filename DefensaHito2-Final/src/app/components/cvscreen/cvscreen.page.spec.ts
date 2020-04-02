import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVScreenPage } from './cvscreen.page';

describe('CVScreenPage', () => {
  let component: CVScreenPage;
  let fixture: ComponentFixture<CVScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
