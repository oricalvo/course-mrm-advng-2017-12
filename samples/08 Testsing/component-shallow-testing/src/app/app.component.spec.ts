import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
describe('AppComponent', () => {

  beforeEach(async done => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    done();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  fit('my test', async done => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;

    app.counter = 123;

    app.inc();

    expect(app.counter).toBe(124);

    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement;
    const span = element.querySelector("[testid=counter]");
    expect(span).toBeTruthy();

    expect(span.textContent).toBe("124");

    done();
  });
});
