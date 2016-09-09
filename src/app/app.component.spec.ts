/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FrameDemoComponent } from './app.component';

describe('App: UwFrame2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FrameDemoComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(FrameDemoComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(FrameDemoComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
