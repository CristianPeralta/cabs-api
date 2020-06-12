import {DefaultCrudRepository} from '@loopback/repository';
import {Cab, CabRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CabRepository extends DefaultCrudRepository<
  Cab,
  typeof Cab.prototype.id,
  CabRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Cab, dataSource);
  }
}
