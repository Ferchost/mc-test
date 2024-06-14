import React from 'react';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const ActiveHome = () => (
  <Svg width="19" height="18" viewBox="0 0 19 18" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 14.834C16.5 15.478 16.052 16 15.5 16H3.5L11.066 9.183C11.312 8.938 11.758 8.939 11.999 9.182L16.5 13.66V14.834ZM5.5 4C6.328 4 7 4.672 7 5.5C7 6.328 6.328 7 5.5 7C4.672 7 4 6.328 4 5.5C4 4.672 4.672 4 5.5 4ZM15.5 0H3.5C1.846 0 0.5 1.346 0.5 3V15C0.5 16.654 1.846 18 3.5 18H15.5C17.154 18 18.5 16.654 18.5 15V3C18.5 1.346 17.154 0 15.5 0Z"
      fill="url(#paint0_linear_4187_1788)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4187_1788"
        x1="0.5"
        y1="9"
        x2="18.5"
        y2="9"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E35205" />
        <Stop offset="1" stopColor="#F98E20" />
      </LinearGradient>
    </Defs>
  </Svg>
);
