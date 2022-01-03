
import React, {useEffect, useState} from "react";

import {
    Alert,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    Platform,
    StyleSheet,
    ScrollView,
    Text,
    TouchableHighlight,
    View,
    ActivityIndicator
} from 'react-native';




const successImage = require('../../../assets/images/success.png');


export interface Props {

    size: number,
    keyValue: number,
    checked: boolean,
    color: string,

    labelColor: string,

    label: string,

    // label2: number,

    value: string,
    index:number,

    selectedArrayObject:(index:number, value:boolean)=>void;

}

// label= {item.partner_or_GroupName}
// label2= {item.partner_Or_Group_Type}
// value= {item.partner_or_GroupID}


const CheckBoxComponent: React.FC<Props> = (props) => {

    const [checkedState, setCheckedState] = useState(false);

    const toggleState= (
        key:number,//string,
        label:string,
        value:string) => {

        props.selectedArrayObject(props.index, !props.checked);

        setCheckedState(!checkedState);

    };

    return (
        <TouchableHighlight


            onPress={ () =>
                toggleState (
                    props.keyValue,
                    props.label,
                    // defaultProps.label2,
                    props.value
                )}

            underlayColor="transparent"
            style={{marginVertical: 10}}
        >

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'}}>

                <View
                    style={{
                        width: props.size,
                        height: props.size,
                        backgroundColor: props.color,
                        padding: 3,
                    }}
                >
                    { (checkedState)
                        ? (<View style={Check_Box_Component_Styles.checkedView}>
                            <Image
                                source={successImage}
                                style={Check_Box_Component_Styles.checkBoxImage}
                            />
                        </View>)
                        : (<View style={Check_Box_Component_Styles.uncheckedView} />)
                    }

                </View>

                <Text
                    style={
                        [
                            Check_Box_Component_Styles.checkBoxLabelText,
                            {color: props.labelColor}
                        ]
                    }
                >
                    {props.label}
                </Text>

            </View>


        </TouchableHighlight>
    );




};

const Check_Box_Component_Styles = StyleSheet.create ({

    checkedView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkBoxImage: {
        height: '100%',
        width: '100%',
        tintColor: 'white',
        resizeMode: 'contain',
    },

    uncheckedView: {
        flex: 1,
        backgroundColor: 'white',
    },

    checkBoxLabelText: {
        fontSize: 16,
        paddingLeft: 10,
    },
});

export default CheckBoxComponent;
