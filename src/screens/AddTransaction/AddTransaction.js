// @flow

import React, {Fragment, Component} from 'react';
import {View, Button} from 'react-native';

import {Card, Icon} from '../../core-ui';
import {ItemList} from '../../components';
import {categoryToIconName} from '../../generals/utils';
import {WHITE, BLACK} from '../../constants/colors';

import SelectCategory from './components/SelectCategory';
import SelectDate from './components/SelectDate';
import CashflowStat from './components/CashflowStat';
import AddTransactionDetail from './components/AddTransactionDetail';

import type {NavigationScreenProp, NavigationRoute} from 'react-navigation';
import type {Category} from '../../types';
type Props = {
  goBack?: () => void;
};
type State = {
  transactionAmount: number;
  selectedCategory: ?Category;
  selectedDate: ?string;
  showCalendar: boolean;
  showCategories: boolean;
  showTransactionDetail: boolean;
  transactionDetail: ?string;
  tempTransactionDetail: ?string;
  selectedTransactionType: 'INCOME' | 'EXPENSE';
};

export default class AddTransaction extends Component<Props, State> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<NavigationRoute>;
  }) => {
    return {
      headerTitle: 'Add Transaction',
      headerLeft: (
        <View style={{paddingHorizontal: 20}}>
          <Icon
            name="bars"
            size={18}
            color={BLACK}
            onPress={() => {
              navigation.toggleDrawer && navigation.toggleDrawer();
            }}
          />
        </View>
      ),
    };
  };
  state = {
    transactionAmount: 0,
    selectedCategory: null,
    selectedDate: null,
    showCalendar: false,
    showCategories: false,
    showTransactionDetail: false,
    transactionDetail: null,
    tempTransactionDetail: null,
    selectedTransactionType: 'EXPENSE',
  };

  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: WHITE}}>
        {this._renderCashflowStat()}
        {this._renderItemList()}
        {this._renderModals()}
        {this._renderGoBackButton()}
      </View>
    );
  }

  _renderGoBackButton() {
    let {goBack} = this.props;
    return <Button onPress={() => goBack && goBack()} title="Go Back" />;
  }

  _renderCashflowStat() {
    let {selectedTransactionType, transactionAmount} = this.state;
    return (
      <CashflowStat
        selectedTransactionType={selectedTransactionType}
        transactionAmount={transactionAmount}
        onAmountChange={(transactionAmount) =>
          this.setState({transactionAmount: Number(transactionAmount)})
        }
        onSelectTransactionType={(transactionType) =>
          this.setState({
            selectedTransactionType: transactionType,
          })
        }
      />
    );
  }

  _renderItemList() {
    let {selectedDate, selectedCategory, transactionDetail} = this.state;
    let parsedSelectedDate =
      selectedDate && new Date(selectedDate).toDateString();
    return (
      <Card>
        <ItemList
          itemName={selectedCategory || 'Choose category...'}
          iconName={
            selectedCategory ? categoryToIconName(selectedCategory) : 'tag'
          }
          onPress={() => {
            this.setState({
              showCategories: true,
            });
          }}
          separator
        />
        <ItemList
          itemName={parsedSelectedDate || 'Select date...'}
          iconName="calendar"
          onPress={() => {
            this.setState({
              showCalendar: true,
            });
          }}
          separator
        />
        <ItemList
          itemName={transactionDetail || 'Add transaction detail...'}
          iconName="align-left"
          onPress={() => {
            this.setState({
              showTransactionDetail: true,
            });
          }}
        />
      </Card>
    );
  }

  _renderModals() {
    let {
      selectedCategory,
      selectedDate,
      transactionDetail,
      tempTransactionDetail,
      showCategories,
      showCalendar,
      showTransactionDetail,
    } = this.state;
    return (
      <Fragment>
        <SelectCategory
          showCategories={showCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={this._onCategorySelect}
          onCancel={() => this._onToggleModal('Categories')}
        />
        <SelectDate
          showCalendar={showCalendar}
          selectedDate={selectedDate}
          onDateSelected={(day: {dateString: string}) => {
            this.setState({
              selectedDate: day.dateString,
              showCalendar: false,
            });
          }}
          onCancel={() => this._onToggleModal('Calendar')}
        />
        <AddTransactionDetail
          showTransactionDetail={showTransactionDetail}
          transactionDetail={transactionDetail}
          tempTransactionDetail={tempTransactionDetail}
          onChangeText={this._onTransactionDetailTextChange}
          onCancel={this._onTransactionDetailCancel}
          onBack={() => this._onToggleModal('TransactionDetail')}
          onSave={this._onTransactionDetailSave}
        />
      </Fragment>
    );
  }

  _onCategorySelect = (selectedCategory: Category) =>
    this.setState({
      selectedCategory,
      showCategories: false,
    });

  _onTransactionDetailTextChange = (text) =>
    this.setState({
      tempTransactionDetail: text,
    });

  _onTransactionDetailCancel = () => {
    this.setState({
      showTransactionDetail: false,
      tempTransactionDetail: null,
    });
  };

  _onTransactionDetailSave = () => {
    let {tempTransactionDetail, transactionDetail} = this.state;
    this.setState({
      showTransactionDetail: false,
      transactionDetail:
        tempTransactionDetail === null
          ? transactionDetail
          : tempTransactionDetail,
      tempTransactionDetail: null,
    });
  };

  _onToggleModal = (
    modalType: 'Categories' | 'Calendar' | 'TransactionDetail'
  ) => {
    this.setState({
      [`show${modalType}`]: !this.state[`show${modalType}`],
    });
  };
}
