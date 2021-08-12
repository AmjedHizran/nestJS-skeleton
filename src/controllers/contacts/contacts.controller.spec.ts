import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from '../../services/contact/contact.service';
import { ContactsController } from './contacts.controller';
import { Contact } from '../../entities/contact.entity';

describe('ContactsController', () => {
  let controller: ContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [ContactService, 
        {
          provide: ContactService,
          useValue: {
          get: jest.fn(() => Contact) // really it can be anything, but the closer to your actual logic the better
        }
      }
    ],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
