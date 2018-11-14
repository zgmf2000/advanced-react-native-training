// @flow

import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED} from '../../constants/colors';
import type {ReducerState} from '../../types';

class Dashboard extends Component<*, *> {
  render() {
    const {transactions} = this.props;
    return (
      <View style={{padding: 10, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <BalanceCard title="Income" amount="$13,500.00" color={BLUE_SEA} />
          <BalanceCard title="Expense" amount="$49,000.00" color={RED} />
        </View>
        <View style={{marginTop: 15, flex: 1}}>
          <Text style={{marginBottom: 5, fontSize: 16}}>History</Text>
          <FlatList
            data={transactions}
            renderItem={({item}) => <TransactionCard {...item} />}
            keyExtractor={({id}) => id}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: ReducerState) => {
  const {transactions} = state.transactions;
  return {
    transactions: transactions,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
