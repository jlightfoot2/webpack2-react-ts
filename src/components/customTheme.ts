import {
  red700,
  greenA100,
  greenA400,
  orangeA200, orangeA100, orangeA400,
  grey900,
  fullWhite
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
/**
https://www.materialpalette.com/blue-grey/green
.dark-primary-color    { background: #455A64; }
.default-primary-color { background: #607D8B; }
.light-primary-color   { background: #CFD8DC; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #4CAF50; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }
 */
export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#4CAF50',
    primary2Color: '#455A64',
    primary3Color: '#CFD8DC',
    accent1Color: '#607D8B',
    accent2Color: greenA400,
    accent3Color: greenA100,
    textColor: '#212121',

    alternateTextColor: fullWhite,
    canvasColor: fullWhite,
    borderColor: fade(grey900, 0.3),
    disabledColor: fade(grey900, 0.3),
    pickerHeaderColor: fade(grey900, 0.12),
    clockCircleColor: fade(grey900, 0.12)
  }
};
