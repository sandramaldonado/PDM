import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiAppComponent } from './mi-app.component';

describe('MiAppComponent', () => {
  let component: MiAppComponent;
  let fixture: ComponentFixture<MiAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiAppComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
