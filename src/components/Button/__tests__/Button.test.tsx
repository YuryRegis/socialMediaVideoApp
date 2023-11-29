import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {ReactTestInstance} from 'react-test-renderer';
import {screen, fireEvent, render} from '@testing-library/react-native';


import {Button} from '@components';
import {theme} from '@theme';

import {ButtonProps} from '../ButtonProps';

const renderComponent = (props?: Partial<ButtonProps>) => {
  render(
    <ThemeProvider theme={theme}>
      <Button title="Button Title" {...props} />
    </ThemeProvider> );

  const buttonElement = screen.getByTestId('button');
  const titleElement = screen.queryByText(/button title/i);
  const loadingElement = screen.queryByTestId('activity-indicator');

  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
};

describe('[Unit] Button component', () => {
  it('should call onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });

  it('should not call onPress function when is disabled', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should show a gray title when is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyle = StyleSheet.flatten(titleElement?.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });

  describe('when button is loading', () => {
    it('should show activity indicator', () => {
      const {loadingElement} = renderComponent({loading: true});

      expect(loadingElement).toBeTruthy();
    });

    it('should hide button title', () => {
      const {titleElement} = renderComponent({loading: true});

      expect(titleElement).toBeFalsy();
    });

    it('should be disabled', () => {
      const mockedPress = jest.fn();
      const {buttonElement} = renderComponent({
        loading: true,
        onPress: mockedPress,
      });

      fireEvent.press(buttonElement as ReactTestInstance);

      expect(mockedPress).not.toHaveBeenCalled();
    });
  });
});
