import React from 'react';
import renderer from 'react-test-renderer';
import ParticipantListItem, {
  IParticipantListItemProps,
} from '../ParticipantListItem';

let props: IParticipantListItemProps = {
  index: 0,
  locality: '',
  name: '',
  onPress: jest.fn,
};
describe('ParticipantListItem', () => {
  it('should match match snapshot', () => {
    const tree = renderer.create(<ParticipantListItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
