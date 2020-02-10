import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {filter, merge} from 'lodash';
import SearchBar from '../components/SearchBar';
import ParticipantList from '../components/ParticipantList';
// @ts-ignore
import SampleData from '../../__mockData__/SmapleData.json';
import {StackNavigationProp} from '@react-navigation/stack';
import {LocalStorage, LocalStorageKeys} from '../utils/LocalStorage';

const dataMock = SampleData;

export interface IHomeScreenProps {
  navigation: StackNavigationProp<any>;
}

export interface IHomeScreenState {
  data: any;
  originalData: any[];
  loading: boolean;
  searchKey: string;
}

class HomeScreen extends React.PureComponent<
  IHomeScreenProps,
  IHomeScreenState
> {
  public state = {
    data: [],
    originalData: [],
    searchKey: '',
    loading: false,
  };

  async componentDidMount(): Promise<void> {
    await this.onRefreshList();
  }

  render(): React.ReactElement {
    const {data, searchKey, loading} = this.state;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', paddingVertical: 5}}>
          Note: Please do pull to refresh to update the list
        </Text>
        <View style={styles.searchBarContainer}>
          <SearchBar
            value={searchKey}
            onValueChange={this.onSearchValueChange}
          />
        </View>
        <ParticipantList
          onRefresh={this.onRefreshList}
          loading={loading}
          data={data}
          onItemPress={this.onParticipantItemPress}
        />
      </View>
    );
  }

  private onRefreshList = async () => {
    const fetchData = await LocalStorage.get<string>(
      LocalStorageKeys.USER_DATA,
    );
    const data: any[] = [];
    if (fetchData) {
      data.push(...JSON.parse(fetchData));
    }
    data.push(...dataMock);
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({data, originalData: data, loading: false});
    }, 2000);
  };

  private onParticipantItemPress = (item: any) => {
    this.props.navigation.navigate('Participant Details', {data: item});
  };

  private onSearchValueChange = (value: string) => {
    this.setState({searchKey: value});
    let data = this.state.originalData;
    if (value.length > 0) {
      const dataName = filter(dataMock, (item: any) => {
        return item.name.includes(value);
      });
      const dataLocality = filter(dataMock, (item: any) => {
        return item.locality.includes(value);
      });
      // @ts-ignore
      data = merge(dataName, dataLocality);
    }
    this.setState({data});
  };
}

export default HomeScreen;

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    padding: 10,
  },
});
