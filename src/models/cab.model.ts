import {Entity, model, property} from '@loopback/repository';

@model()
export class Cab extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  registrationNumber: string;


  constructor(data?: Partial<Cab>) {
    super(data);
  }
}

export interface CabRelations {
  // describe navigational properties here
}

export type CabWithRelations = Cab & CabRelations;
