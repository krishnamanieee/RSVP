const defaultColor = {
  lightGray: '#dadada',
  mediumGray: '#C7C7CD',
  red: '#da2c56',
  gray: '#2c2c2c',
  white: '#fff',
  black: '#000',
  transparentGray: 'rgba(0,0,0,0.1)',
};

const viewColor = {
  primaryColor: defaultColor.red,
  input: {
    background: defaultColor.lightGray,
    errorText: defaultColor.red,
    TitleText: defaultColor.gray,
  },
};

export default {
  ...defaultColor,
  ...viewColor,
};
