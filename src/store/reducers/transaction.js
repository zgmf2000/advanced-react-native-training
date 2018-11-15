// @flow

import {TRANSACTION_LIST} from '../fixture';
import type {Transaction, TransactionAction, TransactionState} from '../../types';

const INITIAL_STATE: TransactionState = {
  activeType: '',
  transactions: TRANSACTION_LIST,
};

function transactionReducer(
  state: TransactionState = INITIAL_STATE,
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
  state: TransactionState,
  type: 'EXPENSE' | 'INCOME' | '') => {
  let transactions = TRANSACTION_LIST;

  if (type !== '') {
    transactions = TRANSACTION_LIST.filter((transaction: Transaction) => transaction.type === type);
  }

  return {
    ...state,
    activeType: type,
    transactions,
  };
};

function addTransaction(
  state: TransactionState,
  data: Transaction
) {
  const newTransactionList = [...state.transactions, data];
  return {
    ...state,
    transactions: newTransactionList,
  };
}

function editTransaction(
  state: TransactionState,
  data: Transaction
) {
  let newTransactionList = state.transactions.map((transaction) => {
    if (transaction.id === data.id) {
      return data;
    } else {
      return transaction;
    }
  });
  return {
    ...state,
    transactions: [...newTransactionList],
  };
}

function deleteTransaction(state: TransactionState, id: string) {
  let newTransactionList = state.transactions.filter(
    (transaction) => transaction.id !== id
  );
  return {
    ...state,
    transactions: [...newTransactionList]};
}

export default transactionReducer;
