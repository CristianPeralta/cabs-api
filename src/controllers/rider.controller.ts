import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Rider} from '../models';
import {RiderRepository} from '../repositories';

export class RiderController {
  constructor(
    @repository(RiderRepository)
    public riderRepository : RiderRepository,
  ) {}

  @post('/riders', {
    responses: {
      '200': {
        description: 'Rider model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rider)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rider, {
            title: 'NewRider',
            exclude: ['id'],
          }),
        },
      },
    })
    rider: Omit<Rider, 'id'>,
  ): Promise<Rider> {
    return this.riderRepository.create(rider);
  }

  @get('/riders/count', {
    responses: {
      '200': {
        description: 'Rider model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Rider) where?: Where<Rider>,
  ): Promise<Count> {
    return this.riderRepository.count(where);
  }

  @get('/riders', {
    responses: {
      '200': {
        description: 'Array of Rider model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Rider, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Rider) filter?: Filter<Rider>,
  ): Promise<Rider[]> {
    return this.riderRepository.find(filter);
  }

  @patch('/riders', {
    responses: {
      '200': {
        description: 'Rider PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rider, {partial: true}),
        },
      },
    })
    rider: Rider,
    @param.where(Rider) where?: Where<Rider>,
  ): Promise<Count> {
    return this.riderRepository.updateAll(rider, where);
  }

  @get('/riders/{id}', {
    responses: {
      '200': {
        description: 'Rider model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Rider, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rider, {exclude: 'where'}) filter?: FilterExcludingWhere<Rider>
  ): Promise<Rider> {
    return this.riderRepository.findById(id, filter);
  }

  @patch('/riders/{id}', {
    responses: {
      '204': {
        description: 'Rider PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rider, {partial: true}),
        },
      },
    })
    rider: Rider,
  ): Promise<void> {
    await this.riderRepository.updateById(id, rider);
  }

  @put('/riders/{id}', {
    responses: {
      '204': {
        description: 'Rider PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rider: Rider,
  ): Promise<void> {
    await this.riderRepository.replaceById(id, rider);
  }

  @del('/riders/{id}', {
    responses: {
      '204': {
        description: 'Rider DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.riderRepository.deleteById(id);
  }
}
