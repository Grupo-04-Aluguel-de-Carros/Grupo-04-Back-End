import { Router } from 'express';
import {
  create,
  exclude,
  findByid,
  findMany,
  update,
} from './Controller/index.js';
import { handlePagination, validate } from '../../middleware/index.js';
import { createStoreSchema } from './Dto/createStoreSchema.js';

const storeRoutes = Router();

storeRoutes.post('/', validate(createStoreSchema), create);
storeRoutes.get('/:id', findByid);
storeRoutes.get('/', handlePagination, findMany);
storeRoutes.put('/:id', validate(createStoreSchema), update);
storeRoutes.delete('/:id', exclude);

export default storeRoutes;
