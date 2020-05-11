import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAppPage } from './my-app.page';

describe('MyAppPage', () => {
  let component: MyAppPage;
  let fixture: ComponentFixture<MyAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
