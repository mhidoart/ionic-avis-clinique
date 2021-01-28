import { TestBed } from '@angular/core/testing';

import { MailingServiceService } from './mailing-service.service';

describe('MailingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailingServiceService = TestBed.get(MailingServiceService);
    expect(service).toBeTruthy();
  });
});
