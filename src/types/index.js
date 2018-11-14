// @flow

export type Category =
  | 'food'
  | 'clothes'
  | 'communications'
  | 'entertainment'
  | 'transportation'
  | 'bills'
  | 'salary'
  | 'savings'
  | 'deposits';

export type Transaction = {
  id: string;
  type: 'EXPENSE' | 'INCOME';
  transactionDetail: string;
  amount: string;
  category: Category;
  date: string;
};

export type InitialCounterState = {
  counter: number;
};

export type TransactionInitialState = {
  transactions: Transaction[];
};

export type ReducerState = {
  counter: InitialCounterState;
  transactions: TransactionInitialState;
};

export type Action =
  | {
      type: 'PLUS_NUMBER';
    }
  | {
      type: 'MIN_NUMBER';
    };
