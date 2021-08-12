import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from  'typeorm';
import { Contact } from  '../../entities/contact.entity';

@Injectable()
export class ContactService {
    private readonly logger = new Logger(ContactService.name);

    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ) { }

    async create(contact: Contact): Promise<Contact> {
        this.logger.log("create contact: ", contact);
        return await this.contactRepository.save(contact);
    }
    
    async  readAll(): Promise<Contact[]> {
        this.logger.log("get all contacts");
        return await this.contactRepository.find();
    }

    async update(contact: Contact): Promise<UpdateResult> {

        return await this.contactRepository.update(contact.id,contact);
    }

    async delete(id): Promise<DeleteResult> {
        this.logger.log("delete contact with id: ", id);
        this.logger.log("type of id is: ", typeof(id));
        return await this.contactRepository.delete(id);
    }
}
