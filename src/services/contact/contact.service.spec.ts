import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { Contact } from '../../entities/contact.entity';
import { Repository } from  'typeorm';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactService,
      {
          provide: ContactService,
          useValue: {
          get: jest.fn(() => Contact) // really it can be anything, but the closer to your actual logic the better
        }
      }
    ],
      
    }).compile();
    // service = moduleRef.get(UserService);
    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
