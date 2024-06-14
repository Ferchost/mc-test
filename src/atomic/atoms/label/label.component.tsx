import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

type LabelProps = TextProps & {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'small';
};

const Label: React.FC<LabelProps> = ({ variant, style, ...props }) => {
  return <Text style={[styles[variant], style]} {...props} />;
};

const styles = StyleSheet.create({
  h1: { fontSize: 32, fontWeight: '600' },
  h2: { fontSize: 28, fontWeight: '600' },
  h3: { fontSize: 30, fontWeight: '600' },
  h4: { fontSize: 26, fontWeight: '600' },
  h5: { fontSize: 22, fontWeight: '600' },
  h6: { fontSize: 18, fontWeight: '600' },
  p1: { fontSize: 16 },
  p2: { fontSize: 14 },
  p3: { fontSize: 24 },
  p4: { fontSize: 20 },
  p5: { fontSize: 16 },
  p6: { fontSize: 14 },
  small: { fontSize: 12 },

});

export default Label;