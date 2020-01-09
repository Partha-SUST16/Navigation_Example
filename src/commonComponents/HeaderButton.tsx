import React from 'react';
import {
  HeaderButtons as DefaultHeaderButtons,
  Item,
} from 'react-navigation-header-buttons';

export class HeaderButtons extends React.PureComponent{
    static Item = Item;
    render(){
        return(
            <DefaultHeaderButtons {...this.props}/>
        );
    }
}