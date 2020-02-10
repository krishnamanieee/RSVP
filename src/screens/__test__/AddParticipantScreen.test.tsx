import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import AddParticipantScreen from '../AddParticipantScreen';

const mockFunction = jest.fn();
let props = {};

describe('AddParticipantScreen', () => {
  let wrapper: any;
  let instance: AddParticipantScreen;
  beforeEach(() => {
    wrapper = shallow<AddParticipantScreen, any, any>(
      <AddParticipantScreen {...props} />,
    );
    instance = wrapper.instance();
  });

  it('should match match snapshot', () => {
    const tree = renderer.create(<AddParticipantScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
