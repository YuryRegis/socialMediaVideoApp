import {TextStyle} from 'react-native';

export type TextPresets =
    | 'headingSmall'
    | 'headingLarge'
    | 'headingMedium'
    
    | 'paragraphLarge'
    | 'paragraphSmall'
    | 'paragraphMedium'
    
    | 'paragraphCaption'
    | 'paragraphCaptionSmall';

export const getFontFamily = (
    preset: TextPresets,
    semiBold?: boolean,
    italic?: boolean,
    bold?: boolean,
) => {
  if (['headingLarge', 'headingMedium', 'headingSmall'].includes(preset)) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
};

export const $fontSizes: Record<TextPresets, TextStyle> = {
    headingMedium: {fontSize: 22, lineHeight: 26.4},
    headingLarge: {fontSize: 32, lineHeight: 38.4},
    headingSmall: {fontSize: 18, lineHeight: 23.4},

    paragraphMedium: {fontSize: 16, lineHeight: 22.4},
    paragraphLarge: {fontSize: 18, lineHeight: 25.2},
    paragraphSmall: {fontSize: 14, lineHeight: 19.6},

    paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
    paragraphCaption: {fontSize: 12, lineHeight: 16.8},
};

export const $fontFamily = {
    black: 'Satoshi-Black',
    blackItalic: 'Satoshi-BlackItalic',
  
    bold: 'Satoshi-Bold',
    boldItalic: 'Satoshi-BoldItalic',
  
    italic: 'Satoshi-Italic',
  
    light: 'Satoshi-Light',
    lightItalic: 'Satoshi-LightItalic',
  
    medium: 'Satoshi-Medium',
    mediumItalic: 'Satoshi-MediumItalic',
  
    regular: 'Satoshi-Regular',
};
