import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmisionesPage } from './admisiones.page';

describe('AdmisionesPage', () => {
  let component: AdmisionesPage;
  let fixture: ComponentFixture<AdmisionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmisionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
