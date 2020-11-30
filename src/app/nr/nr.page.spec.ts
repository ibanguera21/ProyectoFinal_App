import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NrPage } from './nr.page';

describe('NrPage', () => {
  let component: NrPage;
  let fixture: ComponentFixture<NrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
