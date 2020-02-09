import React from 'react';
import {View, FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import ParticipantListItem from './listItem/ParticipantListItem';

interface IParticipantListProps {
  data: any;
  loading: boolean;
  onItemPress: (item: any) => void;
  onRefresh: () => void;
}

class ParticipantList extends React.PureComponent<IParticipantListProps, any> {
  render(): React.ReactElement {
    return <View style={{flex: 1}}>{this.renderListView()}</View>;
  }

  private renderListView() {
    const {data, onRefresh, loading} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    );
  }

  private renderItem = (info: ListRenderItemInfo<any>) => {
    const {item, index} = info;
    const onPress = () => this.onItemPress(item);
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

  private onItemPress = (item: any) => {
    this.props.onItemPress(item);
  };
}

export default ParticipantList;
