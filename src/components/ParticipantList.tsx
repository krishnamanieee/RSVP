import React from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import ParticipantListItem from './listItem/ParticipantListItem';

interface IParticipantListProps {
  data: any;
}
class ParticipantList extends React.PureComponent<IParticipantListProps, any> {
  render(): React.ReactElement {
    return <View style={{flex: 1}}>{this.renderListView()}</View>;
  }

  private renderListView() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }

  private renderItem = (info: ListRenderItemInfo<any>) => {
    const {item, index} = info;
    const onPress = () => this.onItemPress();
    return (
      <View>
        <ParticipantListItem
          index={index}
          name={item.name}
          locality={item.locality}
          onPress={onPress}
        />
      </View>
    );
  };

  private keyExtractor = (item: any, index: number) => index.toString();

  private onItemPress = () => {};
}

export default ParticipantList;
