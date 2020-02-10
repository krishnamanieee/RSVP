import React from 'react';
import {
  TextInputProps,
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Theme from '../theme';

export interface ITextInputProps extends TextInputProps {
  errorMessage?: string;
  title?: string;
}

class TextInput extends React.PureComponent<ITextInputProps, any> {
  render() {
    const {errorMessage, title, style, ...props} = this.props;
    return (
      <View style={styles.container}>
        {title && title.length > 0 && <Text style={styles.title}>{title}</Text>}
        <RNTextInput style={[styles.textInput, style]} {...props} />
        {errorMessage && errorMessage.length > 1 ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
      </View>
    );
  }
}

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  textInput: {
    backgroundColor: Theme.colors.input.background,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    paddingVertical: 5,
    fontSize: Theme.font.text.text,
    color: Theme.colors.input.TitleText,
  },
  errorText: {
    paddingVertical: 5,
    fontSize: Theme.font.text.label,
    color: Theme.colors.input.errorText,
  },
});
