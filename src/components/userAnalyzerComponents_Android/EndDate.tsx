import {Text, View} from "../Themed";
import {Image, Platform, TouchableOpacity} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
// import DateTimePicker from "@react-native-community/datetimepicker";

const calendarImage = require('../../../assets/images/date_icon.png');
export interface EndDate_Props {
    totalHeight: number,
    totalWidth: number,
    endDateValueState2:null | Date,
    showEndState2:boolean,
    showDatepickerEndDate2:()=>void,
    onChangeEndDate2:()=>void,
    modeStateEndTime2:string,
}

const EndDate: React.FC<EndDate_Props> = ({
                                              totalHeight,
                                              totalWidth,
                                              endDateValueState2,
                                              showEndState2,
                                              showDatepickerEndDate2,
                                              onChangeEndDate2,
                                              modeStateEndTime2,
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
                }}>To</Text>
            </View>

            <TouchableOpacity

                onPress={showDatepickerEndDate2}
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
                    justifyContent: 'flex-start'
                }}>
                    <View style={{

                        paddingLeft: 20,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
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

                        // paddingLeft: totalWidth/3,
                        // flexDirection: 'column',
                        // alignItems: 'center',
                        // justifyContent: 'center',

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
                            {(endDateValueState2 === null)
                                ?'End date'
                                :endDateValueState2.toDateString()}
                        </Text>
                    </View>

                </View>


                {(showEndState2 &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        // @ts-ignore
                        // is24Hour={true}
                        // @ts-ignore
                        onChange={onChangeEndDate2}
                        // neutralButtonLabel='clear'

                        neutralButtonLabel='cancel'


                        // value={dateValueState}
                        // value={endDateValueState}

                        value= {
                            (endDateValueState2 === null)
                                ? new Date()
                                :(endDateValueState2)

                        }


                        // @ts-ignore
                        mode={modeStateEndTime2}

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

export default EndDate;
