import {DefaultCrudRepository} from '@loopback/repository';
import {Rider, RiderRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RiderRepository extends DefaultCrudRepository<
  Rider,
  typeof Rider.prototype.id,
  RiderRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Rider, dataSource);
  }
}
