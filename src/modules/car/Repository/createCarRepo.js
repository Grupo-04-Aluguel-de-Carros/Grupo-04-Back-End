import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createCarRepo = async (
  name,
  color,
  imageUrl,
  storeId,
  categoryId,
  brandId
) => {
  try {
    return await db.car.create({
      data: {
        name,
        color,
        imageUrl,
        Category: { connect: { id: categoryId } },
        Brand: { connect: { id: brandId } },
        Store: { connect: { id: storeId } },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel criar o carro',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
