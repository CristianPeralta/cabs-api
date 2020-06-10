import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMongoDataSource} from '../datasources';
import {Rider, RiderRelations} from '../models';

export class RiderRepository extends DefaultCrudRepository<
  Rider,
  typeof Rider.prototype.id,
  RiderRelations
> {
  constructor(@inject('datasources.dbMongo') dataSource: DbMongoDataSource) {
    super(Rider, dataSource);
  }
}
