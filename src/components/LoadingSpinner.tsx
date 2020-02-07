import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import Theme from '../theme';

interface IProps {
  visible: boolean;
  message?: string;
  size?: 'small' | 'large';
}

class LoadingSpinner extends React.PureComponent<IProps, {}> {
  public static defaultProps = {
    visible: false,
    message: 'Please Wait..',
  };

  public render() {
    return this.renderSpinner();
  }

  public renderSpinner() {
    const {visible, size} = this.props;
    if (!visible) {
      return null;
    }

    return (
      <View style={styles.container} key={`spinner_${Date.now()}`}>
        <View style={styles.background}>
          <View style={styles.contentContainer}>
            <ActivityIndicator
              color={Theme.colors.primaryColor}
              size={size ? size : 'small'}
            />
            {Platform.OS === 'android' && (
              <Text style={styles.textStyle}>Please Wait...</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.transparentGray,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: Theme.colors.white,
    padding: 20,
    borderRadius: Platform.OS === 'android' ? 0 : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Theme.colors.black,
    marginHorizontal: 12,
  },
});
