import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import config from './typeorm.config';
import { PersonService } from './person.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Person])],
  controllers: [AppController],
  providers: [AppService, PersonService], // Add the PersonService as a provider here
})
export class AppModule {}
