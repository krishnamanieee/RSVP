import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import ParticipantDetailsScreen, {
  IParticipantDetailsProps,
} from '../ParticipantDetailsScreen';

jest.mock('react-native-gesture-handler');

const testProps = (Props: IParticipantDetailsProps) => ({
  ...Props,
});

const mockFunction = jest.fn();

let props: IParticipantDetailsProps = {
  // @ts-ignore
  navigation: mockFunction,
  route: {
    params: {
      data: [],
    },
  },
};

describe('ParticipantDetailsScreen', () => {
  let wrapper: any;
  let instance: ParticipantDetailsScreen;
  beforeEach(() => {
    wrapper = shallow<ParticipantDetailsScreen, any, any>(
      <ParticipantDetailsScreen {...props} />,
    );
    instance = wrapper.instance();
  });

  it('should match match snapshot', () => {
    const tree = renderer
      .create(<ParticipantDetailsScreen {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
