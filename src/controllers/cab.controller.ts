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
import {Cab} from '../models';
import {CabRepository} from '../repositories';

export class CabController {
  constructor(
    @repository(CabRepository)
    public cabRepository : CabRepository,
  ) {}

  @post('/cabs', {
    responses: {
      '200': {
        description: 'Cab model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cab)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cab, {
            title: 'NewCab',
            exclude: ['id'],
          }),
        },
      },
    })
    cab: Omit<Cab, 'id'>,
  ): Promise<Cab> {
    return this.cabRepository.create(cab);
  }

  @get('/cabs/count', {
    responses: {
      '200': {
        description: 'Cab model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Cab) where?: Where<Cab>,
  ): Promise<Count> {
    return this.cabRepository.count(where);
  }

  @get('/cabs', {
    responses: {
      '200': {
        description: 'Array of Cab model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Cab, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Cab) filter?: Filter<Cab>,
  ): Promise<Cab[]> {
    return this.cabRepository.find(filter);
  }

  @patch('/cabs', {
    responses: {
      '200': {
        description: 'Cab PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cab, {partial: true}),
        },
      },
    })
    cab: Cab,
    @param.where(Cab) where?: Where<Cab>,
  ): Promise<Count> {
    return this.cabRepository.updateAll(cab, where);
  }

  @get('/cabs/{id}', {
    responses: {
      '200': {
        description: 'Cab model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cab, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cab, {exclude: 'where'}) filter?: FilterExcludingWhere<Cab>
  ): Promise<Cab> {
    return this.cabRepository.findById(id, filter);
  }

  @patch('/cabs/{id}', {
    responses: {
      '204': {
        description: 'Cab PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cab, {partial: true}),
        },
      },
    })
    cab: Cab,
  ): Promise<void> {
    await this.cabRepository.updateById(id, cab);
  }

  @put('/cabs/{id}', {
    responses: {
      '204': {
        description: 'Cab PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cab: Cab,
  ): Promise<void> {
    await this.cabRepository.replaceById(id, cab);
  }

  @del('/cabs/{id}', {
    responses: {
      '204': {
        description: 'Cab DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cabRepository.deleteById(id);
  }
}
