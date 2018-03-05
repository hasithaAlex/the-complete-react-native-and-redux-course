//import libraries
import  React  from 'react';
import { Text, View } from 'react-native';

//make components 
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
        );
};

const styles = {
    viewStyle: {
        backgroundColor: '#3DCAFD',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowOffset: { width: 0, height: 2 },// not suport for Andoid 
        shadowOpacity: 0.9 // not suport for Andoid 
    },
    textStyle: {
        fontSize: 20
    }
}

//make the component avalible to other parts of the app 
export default Header; 