import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CancionService } from './cancion.service';

describe('Service: Cancion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CancionService],imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([CancionService], (service: CancionService) => {
    expect(service).toBeTruthy();
  }));
});
