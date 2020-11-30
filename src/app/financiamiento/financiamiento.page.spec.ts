import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinanciamientoPage } from './financiamiento.page';

describe('FinanciamientoPage', () => {
  let component: FinanciamientoPage;
  let fixture: ComponentFixture<FinanciamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinanciamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
