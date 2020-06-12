import {DefaultCrudRepository} from '@loopback/repository';
import {Driver, DriverRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DriverRepository extends DefaultCrudRepository<
  Driver,
  typeof Driver.prototype.id,
  DriverRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Driver, dataSource);
  }
}
