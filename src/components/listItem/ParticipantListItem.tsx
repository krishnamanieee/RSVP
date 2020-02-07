import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Theme from '../../theme';

interface IParticipantListItemProps {
  index: number;
  name: string;
  locality: string;
  onPress: () => void;
}

class ParticipantListItem extends React.PureComponent<
  IParticipantListItemProps,
  any
> {
  render(): React.ReactElement {
    const {index, name, locality, onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor:
              index % 2 === 0 ? Theme.colors.white : Theme.colors.lightGray,
          },
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.profileContainer}>
            <Text style={styles.profileText}>
              {name.substring(0, 2).toUpperCase()}
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={{paddingVertical: 5}}>{name}</Text>
            <Text style={styles.localityText}>
              <Text style={{fontWeight: 'bold'}}>Locality: </Text>
              {locality}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ParticipantListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Theme.colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: Theme.colors.white,
    fontSize: Theme.font.fontSize.large,
    fontWeight: 'bold',
  },
  localityText: {
    fontSize: Theme.font.fontSize.small,
  },
});
