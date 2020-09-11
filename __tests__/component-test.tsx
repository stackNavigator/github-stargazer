import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Details from '../src/UI/Details';
import ListItem from '../src/components/ListItem';
import withKeyboardDismiss from '../src/hoc/withKeyboardDismiss';

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(() => ({params: {name: 'default/name'}})),
  useNavigation: () => ({navigate: jest.fn()}),
}));
React.useContext = jest.fn();
React.createContext = jest.fn();

describe('Details component', () => {
  it('renders correctly without info prop', () => {
    const component = renderer
      .create(<Details headerCaption="Test Header" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('ListItem component', () => {
  it('renders full_name and stars count correctly', () => {
    const component = renderer
      .create(<ListItem leftCaption="default/repo" rightCaption="15001" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('withKeyboardDismiss HOC', () => {
  it('component is wrapped correctly', () => {
    const HOC = withKeyboardDismiss(Details);
    const component = renderer.create(<HOC />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
