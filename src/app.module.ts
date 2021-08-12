import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity'
import { ContactService } from './services/contact/contact.service';
import { ContactsController } from './controllers/contacts/contacts.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'nestngdb',
    username: 'ahizran',
    password: 'password',
    host: 'mysql1',
    port: 3306,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), TypeOrmModule.forFeature([Contact])],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService, LoggerService],
})
export class AppModule {}
