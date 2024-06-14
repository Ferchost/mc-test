

import Svg, { Circle, Path, LinearGradient, Stop, Defs } from 'react-native-svg';

export const CardDetails = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Defs>
            <LinearGradient id="paint0_linear_4160_571" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                <Stop stopColor="#FF0000"/>
                <Stop offset="1" stopColor="#0000FF"/>
            </LinearGradient>
        </Defs>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.514 1.69971H3.67687C2.3651 1.69971 1.29541 2.76939 1.29541 4.08116V18.9892C1.29541 20.301 2.3651 21.3707 3.67687 21.3707H27.5083C28.8201 21.3707 29.8898 20.301 29.8898 18.9892V4.08116C29.8954 2.76939 28.8257 1.69971 27.514 1.69971ZM28.3078 18.9948C28.3078 19.434 27.9531 19.7886 27.514 19.7886H3.67687C3.23773 19.7886 2.88305 19.434 2.88305 18.9948V4.08116C2.88305 3.64203 3.23773 3.28734 3.67687 3.28734H27.5083C27.9475 3.28734 28.3021 3.64203 28.3021 4.08116V18.9948H28.3078Z"
            fill="url(#paint0_linear_4160_571)"
        />
    </Svg>


    )
}


