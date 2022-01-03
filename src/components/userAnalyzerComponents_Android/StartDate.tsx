import {Text, View} from "../Themed";
import {Image, Platform, TouchableOpacity} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const calendarImage = require('../../../assets/images/date_icon.png');
export interface StartDate_Props {
    totalHeight: number,
    totalWidth: number,
    startDateValueState2:null | Date,
    showStartState2:boolean,
    showDatepickerStart2:()=>void,
    onChangeStartDate2:()=>void,
    modeStateStartTime2:string,
}

const StartDate: React.FC<StartDate_Props> = ({
                                                  totalHeight,
                                                  totalWidth,
                                                  startDateValueState2,
                                                  showStartState2,
                                                  showDatepickerStart2,
                                                  onChangeStartDate2,
                                                  modeStateStartTime2


                                              }) => {

    return(

        <View style={{
            flexDirection: 'row',

            width: '95%',
            marginBottom: 20,
            alignItems: 'center',
            height: totalHeight / 16,
            // backgroundColor: 'indigo',

        }}>

            <View
                style={{
                    width: '24%',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: totalWidth/10,
                }}
            >
                <Text style={{
                    color: 'teal',
                    fontWeight: "bold",
                    fontSize: 16,
                }}>From</Text>
            </View>

            <TouchableOpacity

                onPress= {showDatepickerStart2}
                style={{
                    height: 40,
                    width: '72%',
                    borderColor: 'teal',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderRadius: 0,
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    flex: 3,
                    justifyContent: "flex-start",
                    // backgroundColor: "tomato",
                }}>
                    <View style={{

                        paddingLeft: 20,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "tomato",
                    }}
                    >
                        <Image
                            style={{
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 30,

                            }}
                            source={calendarImage}
                        />
                    </View>
                    <View style={{

                        paddingLeft: 10,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "gold",
                    }}
                    >
                        <Text style={{

                            alignSelf: 'center',
                            color: '#757575',
                        }}>
                            {
                                (startDateValueState2 === null)
                                    ? 'Start date'
                                    :startDateValueState2.toDateString() // 1 July 2021
                                    // :startDateValueState2
                            }
                        </Text>
                    </View>

                </View>






                {(showStartState2 &&
                    <DateTimePicker
                        testID="dateTimePickerStartDate"
                        timeZoneOffsetInMinutes={0}
                        // @ts-ignore
                        // is24Hour={true}
                        // @ts-ignore
                        onChange={onChangeStartDate2}
                        // neutralButtonLabel='clear'

                        neutralButtonLabel='cancel'
                        value = {
                            (startDateValueState2 === null)
                                ? new Date()
                                :(startDateValueState2)

                        }
                        // @ts-ignore
                        mode={modeStateStartTime2}

                        display= {(Platform.OS==="android")
                            ?"default"
                            :"compact"}

                        textColor='crimson'
                        maximumDate={new Date(2016, 12, 1)}
                        minimumDate={new Date(2016, 0, 1)}
                    />
                )}



            </TouchableOpacity>
        </View>
    );
}

export default StartDate;
