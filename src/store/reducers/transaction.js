// @flow

import {TRANSACTION_LIST} from '../fixture';
import type {Transaction, TransactionAction} from '../../types';

function transactionReducer(
  state: Array<Transaction> = TRANSACTION_LIST,
  action: TransactionAction
) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return addTransaction(state, action.payload.data);
    case 'EDIT_TRANSACTION':
      return editTransaction(state, action.payload.data);
    case 'DELETE_TRANSACTION':
      return deleteTransaction(state, action.payload.id);
    case 'VIEW_TRANSACTION_BY_TYPE':
      return viewTransactionType(state, action.payload.type);
    default:
      return state;
  }
}

const viewTransactionType = (
  transactionList: Array<Transaction>,
  type: 'EXPENSE' | 'INCOME') => {
  return TRANSACTION_LIST.filter((transaction: Transaction) => transaction.type === type);
};

function addTransaction(
  transactionList: Array<Transaction>,
  data: Transaction
) {
  const newTransactionList = [...transactionList, data];
  return newTransactionList;
}

function editTransaction(
  transactionList: Array<Transaction>,
  data: Transaction
) {
  let newTransactionList = transactionList.map((transaction) => {
    if (transaction.id === data.id) {
      return data;
    } else {
      return transaction;
    }
  });
  return [...newTransactionList];
}

function deleteTransaction(transactionList: Array<Transaction>, id: string) {
  let newTransactionList = transactionList.filter(
    (transaction) => transaction.id !== id
  );
  return [...newTransactionList];
}

export default transactionReducer;
