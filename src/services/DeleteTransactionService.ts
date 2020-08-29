import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import { getCustomRepository, TransactionRepository } from 'typeorm';
import Transactionsrepository from '../repositories/TransactionsRepository';


class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if(!transaction) {
      throw new AppError("Transaction does not exists")
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
