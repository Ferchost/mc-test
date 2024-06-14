import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#FFDD00',
  Secondary = '#0F265C', 
  MainOrange = '#E35205',
  AccentSuccess = '#7A9A02',
  GrayBlack = '#333333',
  AccentLink = '#618DFF',
  Gray100 = '#EBEBEB',
  Gray400 = '#ADADAD',
  Gray800 = '#5C5C5C',
  GraySuperLight = '#F8F8F8'
}

export const CommonTheme: DefaultTheme = {
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    mainOrange:BrandColors.MainOrange,
    accentSuccess: BrandColors.AccentSuccess,
    grayBlack:BrandColors.GrayBlack,
    accentLink: BrandColors.AccentLink,
    gray100:BrandColors.Gray100,
    gray400:BrandColors.Gray400,
    gray800:BrandColors.Gray800,
    graySuperLight: BrandColors.GraySuperLight
  },
};
