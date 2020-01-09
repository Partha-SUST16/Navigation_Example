import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Themed } from 'react-navigation';

const SampleText = ({ children }: { children?: ReactNode }) => (
    <Themed.Text style={styles.sampleText}>{children}</Themed.Text>
  );
  
  export default SampleText;
  
  const styles = StyleSheet.create({
    sampleText: {
      margin: 14,
    },
  });