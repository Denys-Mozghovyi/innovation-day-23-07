// src/person.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import axios from 'axios';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async getPersonById(id: number): Promise<any> {
    const person = await this.personRepository.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException('Person not found');
    }

    const { name } = person;
    const response = await axios.get(`https://api.agify.io/?name=${name}`);
    return response.data;
  }
}
