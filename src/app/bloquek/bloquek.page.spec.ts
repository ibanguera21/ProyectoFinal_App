import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloquekPage } from './bloquek.page';

describe('BloquekPage', () => {
  let component: BloquekPage;
  let fixture: ComponentFixture<BloquekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloquekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloquekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
