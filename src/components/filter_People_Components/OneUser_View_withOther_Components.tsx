import React, {} from 'react';

import {
    Animated,
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons,Feather } from '@expo/vector-icons';

import moment from 'moment';
import {User_Items_Props} from "./User_Items";
import {Profile} from "../../customInterfaces/UserActivity";
const defaultImage = require('../../../assets/default-image_01.jpg');
const videoImage = require('../../../assets/video-image.png');
export interface OneUser_View_withOther_Components_Props{
    property2: Profile,
    // currentIndexLast:number,

    ImageResource:string,


    // contentType:string,
    index: number,

}

// const User_Items: React.FC<User_Items_Props> =  (props) => {
const OneUser_View_withOther_Components: React.FC<OneUser_View_withOther_Components_Props> =  (props) => {




    // const index = props.currentIndexLast;
    const deviceWidth =   Dimensions.get('window').width;
    const deviceHeight =  Dimensions.get('window').height;

    // let dateWithMoment = moment(props.property2.date).format('ll');


    //console.log("props:__OneUser_View_withOther_Components___ ",props);


    return (



            <ImageBackground
                style={{
                    width: (deviceWidth/2)-15,
                    height: deviceHeight/4,
                    flexDirection: 'column',
                    justifyContent: 'space-between',



                    marginHorizontal: 5,
                    marginVertical: 5,


                }}
                source={{uri: props.ImageResource}}
                // source={{uri: "https://cdn.zmescience.com/wp-content/uploads/2015/01/Bright-ideas-The-evolution-of-natural-colours.jpg"}}
            >


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    alignContent: 'flex-end',
                    justifyContent: 'center',
                    width:  100,
                    height: 40,
                    backgroundColor: 'grey',
                    opacity: 0.6,

                }}>

                    <TouchableOpacity
                        onPress= {()=> {
                            console.log("RPG");

                        }}
                    >
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 5,
                            paddingBottom: 1
                        }}>
                         {/*   <Feather
                                name='x-circle'
                                size={25}
                                style={{
                                    // color: 'black',
                                    top: '.8%',
                                    color: 'red',

                                }}
                            />*/}
                            <Text>Not Implemented</Text>
                        </View>

                    </TouchableOpacity>

                </View>

                <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    height: 50,
                    backgroundColor: '#FFFFFF',
                    opacity: 0.6,
                }}>



                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                        >
                            <Text style={{
                                color: '#000000',
                                fontWeight: '500',
                                fontSize: 16,

                            }}>{' '}{props.property2.name}, {' '}
                                {/*{props.property2.itemData.categoryText},{' '}*/}
                                {/*{props.property2.itemData.amountNumber}*/}
                            </Text>
                        </View>
                    </ScrollView>

                    {/* horizontal row view */}
                    <View style={{
                        flexDirection: 'row',
                    }}>



                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-end',

                        }}>
                            <Text style={{
                                color: '#000000',
                                fontWeight: '500',
                                fontSize: 16,
                                textAlign: 'right',
                                paddingRight: 5,

                            }}
                            >
                                {/*{dateWithMoment}{' '}*/}

                                {props.property2.userID_Custom_Arefin}{' '}



                            </Text>
                        </View>


                    </View>


                </View>
            </ImageBackground>

    );

}

export default OneUser_View_withOther_Components;
