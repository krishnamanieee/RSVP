import React from 'react';
import renderer from 'react-test-renderer';
import TextInput, {ITextInputProps} from '../TextInput';
let props: ITextInputProps = {
  errorMessage: '',
};
describe('TextInput', () => {
  it('should match match snapshot', () => {
    const tree = renderer.create(<TextInput {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
