// @flow

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {WHITE} from '../../../constants/colors';

type BalanceCardProps = {
  title: string;
  amount: string;
  color: string;
  onPress?: () => void;
};

export default function BalanceCard(props: BalanceCardProps) {
  let {title, amount, color, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        balanceCardStyles.card,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={{fontSize: 16, color: WHITE}}>{title}</Text>
      <Text style={{fontSize: 22, color: WHITE}}>{amount}</Text>
    </TouchableOpacity>
  );
}

let balanceCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
});
