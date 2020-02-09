import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Theme from '../theme';
import moment from 'moment';
interface IParticipantDetailsProps {
  data: any;
  navigation: StackNavigationProp<any>;
}

class ParticipantDetailsScreen extends React.PureComponent<
  IParticipantDetailsProps,
  {}
> {
  render(): React.ReactNode {
    const {data} = this.props.route.params;
    return (
      <>
        {this.renderItemView('Name', data.name, 0)}
        {this.renderItemView('Age', data.age, 1)}
        {this.renderItemView('Number of Guest', data.guest, 2)}
        {this.renderItemView('Locality', data.locality, 3)}
        {this.renderItemView(
          'DOB',
          moment(data.DOB).format('dddd, MMMM Do YYYY'),
          4,
        )}
        {this.renderItemView('Address', data.address, 5)}
      </>
    );
  }

  private renderItemView = (title: string, value: string, index: number) => {
    const colorValue: string =
      index % 2 === 0 ? Theme.colors.lightGray : Theme.colors.white;
    const colorTile: string =
      index % 2 === 0 ? Theme.colors.white : Theme.colors.lightGray;
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.itemTitle, {backgroundColor: colorTile}]}>
          {title}
        </Text>
        <Text style={[styles.itemValue, {backgroundColor: colorValue}]}>
          {value}
        </Text>
      </View>
    );
  };
}

export default ParticipantDetailsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemTitle: {
    backgroundColor: Theme.colors.lightGray,
    width: Theme.viewPort.width / 3,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  itemValue: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
