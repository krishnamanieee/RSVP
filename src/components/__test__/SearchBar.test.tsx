import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar, {ISearchBarProps} from '../SearchBar';
let props: ISearchBarProps = {
  onValueChange: jest.fn(),
  value: '',
};
describe('SearchBar', () => {
  it('should match match snapshot', () => {
    const tree = renderer.create(<SearchBar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
