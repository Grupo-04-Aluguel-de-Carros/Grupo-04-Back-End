import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateUserRepo = async (id, updateBody) => {
  try {
    return await db.user.update({
      data: updateBody,
      where: { id },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível atualizar o usuário.',
      HttpStatusCode.BadRequest
    );
  }
};