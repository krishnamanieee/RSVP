import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HomeScreen, {IHomeScreenProps, IHomeScreenState} from '../HomeScreen';

jest.mock('react-native-gesture-handler');

const testProps = (Props: IHomeScreenProps) => ({
  ...Props,
});

const mockFunction = jest.fn();

let props: IHomeScreenProps = {
  navigation: mockFunction,
};

describe('HomeScreen', () => {
  let wrapper: any;
  let instance: HomeScreen;
  beforeEach(() => {
    wrapper = shallow<HomeScreen, IHomeScreenProps, IHomeScreenState>(
      <HomeScreen {...props} />,
    );
    instance = wrapper.instance();
  });

  it('should match match snapshot', () => {
    const tree = renderer.create(<HomeScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
