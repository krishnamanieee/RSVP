import React from 'react';
import {View} from 'react-native';
import {filter, merge} from 'lodash';
import SearchBar from '../components/SearchBar';
import ParticipantList from '../components/ParticipantList';
// @ts-ignore
import SampleData from '../../__mockData__/SmapleData.json';

const dataMock = SampleData;

interface IHomeScreenState {
  data: any;
  searchKey: string;
}

class HomeScreen extends React.PureComponent<any, IHomeScreenState> {
  public state = {
    data: dataMock,
    searchKey: '',
  };

  render(): React.ReactElement {
    const {data, searchKey} = this.state;
    return (
      <View style={{flex: 1}}>
        <SearchBar value={searchKey} onValueChange={this.onSearchValueChange} />
        <ParticipantList data={data} />
      </View>
    );
  }

  private onSearchValueChange = (value: string) => {
    this.setState({searchKey: value});
    let data = dataMock;
    if (value.length > 0) {
      const dataName = filter(dataMock, (item: any) => {
        return item.name.includes(value);
      });
      const dataLocality = filter(dataMock, (item: any) => {
        return item.locality.includes(value);
      });
      data = merge(dataName, dataLocality);
    }
    this.setState({data});
  };
}

export default HomeScreen;
