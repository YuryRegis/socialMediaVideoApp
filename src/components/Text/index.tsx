import React from 'react';

import {$fontSizes, getFontFamily} from './TextPresets';
import {SRText, TextProps} from './TextProps';

export const Text = ({
    preset = 'paragraphMedium',
    children,
    semiBold,
    italic,
    style,
    bold,
    ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(preset, semiBold, italic, bold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rest}>
      {children}
    </SRText>
  );
};
