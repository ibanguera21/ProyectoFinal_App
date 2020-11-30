import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColiseoPage } from './coliseo.page';

describe('ColiseoPage', () => {
  let component: ColiseoPage;
  let fixture: ComponentFixture<ColiseoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColiseoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColiseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
