// src/app.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('api/person')
export class AppController {
  constructor(private readonly personService: PersonService) {}

  @Get(':id')
  async getPerson(@Param('id') id: number) {
    return this.personService.getPersonById(id);
  }
}
