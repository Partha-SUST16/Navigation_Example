import React from 'react';
import {
  AccessibilityStates,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface ButtonProps{
    title:string;
    onPress:(event?:any)=>void;
    color?:string;
    hasTVPreferredFocus?: boolean;
    accessibilityLabel?: string;
    disabled?: boolean;
    testID?: string;
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        const{
            accessibilityLabel,
            color,
            onPress,
            title,
            disabled,
            testID,
        } = this.props;
        const buttonStyles: any = [styles.button];
        const textStyles:any = [styles.text];
        if(color){
            if(Platform.OS==='ios')
            {
                textStyles.push({color});
            }
            else 
                textStyles.push({backgroundColor:color});
        }

        const accessibilityStates:AccessibilityStates[] = [];
        if (disabled) {
            buttonStyles.push(styles.buttonDisabled);
            textStyles.push(styles.textDisabled);
            accessibilityStates.push('disabled');
          }
        const formattedTitle =
          Platform.OS === 'android' ? title.toUpperCase() : title;
          
        return (
            <TouchableOpacity
                accessibilityLabel={accessibilityLabel}
                accessibilityRole="button"
                accessibilityStates={accessibilityStates}
                disabled = {disabled}
                onPress={onPress}
            >
                <View style={buttonStyles}>
                    <Text style={textStyles}>{formattedTitle}</Text>
                </View>


            </TouchableOpacity>
        );
      }
}

const styles = StyleSheet.create({
    button:Platform.select({
        android:{
            backgroundColor: '#2196F3',
            borderRadius: 2,
            elevation: 4, 
        },
        ios:{}
    }),
    buttonDisabled:Platform.select({
        android:{
            backgroundColor: '#dfdfdf',
            elevation: 0,
        },
        ios:{}
    }),
    text:{
        padding:8,
        textAlign:'center',
        color:'white',
        fontWeight:'500'
    },
    textDisabled:Platform.select({
        android:{
            color:'#a1a1a1',
        },
        ios:{
            color:'#cdcdcd'
        }
    })
});