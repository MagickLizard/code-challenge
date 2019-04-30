import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RequestService } from './request-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent],
      providers: [RequestService]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Names of cats and the gender of their owners'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.h1).toEqual(
  //     'Names of cats and the gender of their owners'
  //   );
  // });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Names of cats and the gender of their owners'
    );
  });
});
