

import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";


// import {CoutriesWithPhoneFlag} from "./CoutriesWithPhoneFlag";
// const tempAllOptionsState:combinedInterface[] = CoutriesWithPhoneFlag;





import {Ionicons, Octicons,MaterialCommunityIcons,Entypo} from '@expo/vector-icons';

import React, {
    forwardRef
} from 'react';

export interface Search_People_Props{

    filter_By_Text_InputState_1: string,
    setSearch_1:(index:string)=> void,
    clearSearch_1: () => void,
    deviceHeight_1: number,
    deviceWidth_1: number,
    // ref:  React.RefObject<typeof TextInput>,
    ref:  React.RefObject<TextInput>,

}

//@ts-ignore
const Search_People: React.FC<Search_People_Props> = forwardRef((
        props,
        // forwardedRef:React.Ref<typeof TextInput>,
        forwardedRef:React.Ref<TextInput>,
    ) => {


        return (




                    <View
                        style={{
                            backgroundColor: 'white',
                            width: props.deviceWidth_1-20,
                            marginHorizontal: 10,
                            alignItems: "center",
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            borderRadius: 10,
                            borderColor: 'teal',
                            borderWidth: 2,

                        }}
                    >
                        {/*until clear Search*/}
                        <View style={{
                            flexDirection: 'row',
                            flex: 1,



                        }}>
                            <View style={{
                                flexDirection: 'column',
                                flex: 0.1,
                                justifyContent: 'center',
                                // backgroundColor: 'gold',
                            }}>
                                <Ionicons style={Search_People_Styles.searchIcon}
                                          name='ios-search'
                                          size={30}
                                          color='gray'
                                />
                            </View>

                            <TextInput

                                style={
                                    [
                                        Search_People_Styles.input,
                                        {
                                            height: props.deviceHeight_1/12,
                                            color: 'black',
                                        }
                                    ]}
                                placeholder='Search by name'
                                placeholderTextColor ={'black'}
                                // ref={refSearch}
                                ref= {forwardedRef}
                                onChangeText={ (value:string) => props.setSearch_1(value)}
                                autoCorrect={false}
                                textContentType={'none'}
                                keyboardType={'default'}
                                value = {props.filter_By_Text_InputState_1}

                            />

                            {/*<View style={{*/}
                            {/*    flexDirection: 'column',*/}
                            {/*    flex: 0.1,*/}
                            {/*    justifyContent: 'center',*/}
                            {/*    // backgroundColor: 'gold',*/}
                            {/*}}>*/}
                            {/*    <Ionicons style={Search_People_Styles.searchIcon}*/}
                            {/*              name='ios-search'*/}
                            {/*              size={30}*/}
                            {/*              color='gray'*/}
                            {/*    />*/}
                            {/*</View>*/}

                            <View style={{
                                flexDirection: 'column',
                                flex: 0.2,
                                justifyContent: 'center',
                                // backgroundColor: 'gold',
                            }}
                            >
                                <TouchableOpacity
                                    onPress={props.clearSearch_1}>

                                    <Entypo style={{
                                    }}
                                            name='circle-with-cross'
                                            size={40}
                                            color='black'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>






        );
    }
);


export default Search_People;


const Search_People_Styles = StyleSheet.create ({
    searchIcon: {
        paddingRight: 5,
    },

    input: {
        flex: 0.9,
        backgroundColor: 'transparent',
        paddingLeft: 0,
        color: 'grey',
        fontWeight: 'normal',
        fontSize: 16,

    },
});


