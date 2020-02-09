jest.mock('@react-navigation/drawer', () => {
  createDrawerNavigator: jest.fn();
});
