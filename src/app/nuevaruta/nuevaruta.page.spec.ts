import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevarutaPage } from './nuevaruta.page';

describe('NuevarutaPage', () => {
  let component: NuevarutaPage;
  let fixture: ComponentFixture<NuevarutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevarutaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevarutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
