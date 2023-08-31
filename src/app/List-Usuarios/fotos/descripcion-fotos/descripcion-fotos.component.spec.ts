import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionFotosComponent } from './descripcion-fotos.component';

describe('DescripcionFotosComponent', () => {
  let component: DescripcionFotosComponent;
  let fixture: ComponentFixture<DescripcionFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
