import {Entity, model, property} from '@loopback/repository';

@model()
export class Rider extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'date',
    required: true,
  })
  dob: string;

  @property({
    type: 'string',
  })
  paymentType?: string;


  constructor(data?: Partial<Rider>) {
    super(data);
  }
}

export interface RiderRelations {
  // describe navigational properties here
}

export type RiderWithRelations = Rider & RiderRelations;
