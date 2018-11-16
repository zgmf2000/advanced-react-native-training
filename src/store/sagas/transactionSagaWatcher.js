// @flow
import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchTransactionList} from '../../utils/fetch/fetchTransactions';

export default function* transactionSagaWatcher(): Generator<*, *, *> {
  yield takeLatest('FETCH_TRANSACTION_LIST', fetchTransaction);
}

export function* fetchTransaction(): Generator<*, *, *> {
  try {
    let response = yield call(fetchTransactionList);
    if (response) {
      yield put({type: 'UPDATE_TRANSACTION', payload: response});
    }
  } catch (error) {
    console.log('error: ', error);
  }
}
