// @flow

import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED} from '../../constants/colors';
import type {Transaction} from '../../types/index';

type Props = {
  transactionList: Array<Transaction>;
  viewTransactionByType: (type: 'INCOME' | 'EXPENSE') => void;
};

class Dashboard extends Component<Props, *> {
  render() {
    return (
      <View style={{padding: 10, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <BalanceCard onPress={() => this._handleViewTransaction('INCOME')} title="Income" amount="$13,500.00" color={BLUE_SEA} />
          <BalanceCard onPress={() => this._handleViewTransaction('EXPENSE')} title="Expense" amount="$49,000.00" color={RED} />
        </View>
        <View style={{marginTop: 15, flex: 1}}>
          <Text style={{marginBottom: 5, fontSize: 16}}>History</Text>
          <FlatList
            data={this.props.transactionList}
            renderItem={({item}) => <TransactionCard {...item} />}
            keyExtractor={({id}) => id}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  _handleViewTransaction(type: 'INCOME' | 'EXPENSE') {
    this.props.viewTransactionByType(type);
  }
}

const mapStateToProps = (state: *) => {
  return {
    transactionList: state.transaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewTransactionByType: (type: 'INCOME' | 'EXPENSE') => dispatch({
      type: 'VIEW_TRANSACTION_BY_TYPE',
      payload: {
        type,
      },
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
