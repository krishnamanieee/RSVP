import React from 'react';
import renderer from 'react-test-renderer';
import ParticipantList, {IParticipantListProps} from '../ParticipantList';
let props: IParticipantListProps = {
  data: [],
  loading: false,
  onItemPress: jest.fn(),
  onRefresh: jest.fn(),
};
describe('ParticipantList', () => {
  it('should match match snapshot', () => {
    const tree = renderer.create(<ParticipantList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
