import React from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';

export interface ISearchBarProps {
  value: string;
  onValueChange: (value: string) => void;
}

class SearchBar extends React.PureComponent<ISearchBarProps, any> {
  render(): React.ReactElement {
    const {value, onValueChange} = this.props;
    return (
      <View>
        <TextInput
          placeholder={'Search the participant'}
          value={value}
          onChangeText={onValueChange}
        />
      </View>
    );
  }
}
export default SearchBar;
