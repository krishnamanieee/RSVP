import React from 'react';
import renderer from 'react-test-renderer';
import LoadingSpinner, {ILoadingSpinnerProps} from '../LoadingSpinner';
let props: ILoadingSpinnerProps = {
  message: '',
  size: 'small',
  visible: false,
};
describe('LoadingSpinner', () => {
  it('should match match snapshot', () => {
    const tree = renderer.create(<LoadingSpinner {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
