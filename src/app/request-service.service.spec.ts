import { TestBed } from '@angular/core/testing';
import { RequestService } from './request-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

describe('RequestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [RequestService],
    });
  });

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
