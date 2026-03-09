import { createTheme, darkColors, lightColors } from '@rneui/themed';
import { Platform, StyleSheet } from 'react-native';

export const defaultTheme = createTheme({
    lightColors: {
        primary: '#024C9D',
        primaryLight: '#024C9D',
        background: '#F0F1F2',
        titleText: '#2C2B63',
        titleLight: '#4B4C7B',
        class_schedule: '#904FD3',
        doubt_schedule: '#904FD3',
        attendance: '#0FAA19',
        exam_report: '#FF911E',
        test_schedule: '#33A5A0',
        talk_to_mentor: '#E14C51',
        date_header: '#0A7AAB',
        blue: '#0D20C8',
        menu_inactive: 'rgba(255,255,255,0.6)',
        light: '#CBDDFF',
        back: '#f0f0f0',
        ...Platform.select({
            default: lightColors.platform.android,
            ios: lightColors.platform.ios,
        }),
    },
    darkColors: {
        primary: '#024C9D',
        primaryLight: '#024C9D',
        background: '#F0F1F2',
        titleText: '#2C2B63',
        titleLight: '#4B4C7B',
        class_schedule: '#904FD3',
        doubt_schedule: '#904FD3',
        attendance: '#0FAA19',
        exam_report: '#FF911E',
        test_schedule: '#33A5A0',
        talk_to_mentor: '#E14C51',
        date_header: '#0A7AAB',
        blue: '#0D20C8',
        menu_inactive: 'rgba(255,255,255,0.6)',
        light: '#CBDDFF',
        back: '#f0f0f0',
        ...Platform.select({
            default: darkColors.platform.android,
            ios: darkColors.platform.ios,
        }),
    },
    // mode: 'dark',
    components: {
        Text: {
            style: {
                fontFamily: 'Lato-Regular',
                fontSize: 15,
            },
            h1Style: {
                fontFamily: 'Lato-Bold',
                fontSize: 18
            },
            h4Style: {
                fontFamily: 'Lato-Bold',
                fontSize: 13
            }
        },
        Input: {
            inputStyle: {
                fontFamily: 'Lato-Regular',
            },
        },
        Button: {
            style: {
                fontFamily: 'Lato-Regular',
                padding: 8,
            },
            titleStyle: {
                fontFamily: 'Lato-Bold',
            },
            containerStyle: {
                borderRadius: 10,
                backgroundColor: '#034690',
                elevation: 10,
                marginHorizontal: 10,
            },
            buttonStyle: {
                backgroundColor: '#034690',
                padding: 20,
            }
        },
        ListItem: {
            containerStyle: {
                padding: 20,
                elevation: 5,
                marginBottom: 20,
                marginHorizontal: 10,
                borderRadius: 10,
                backgroundColor: 'white'
            }
        },
        ListItemTitle: {
            style: {
                fontFamily: 'Lato-Bold',
                fontSize: 18,
            },
        },
        ListItemSubtitle: {
            style: {
                fontFamily: 'Lato-Regular',
                fontSize: 14,
                color: '#AEAAAB'
            },
        },
        Tab: {
            containerStyle: {
                backgroundColor: 'white',
                borderTopWidth: 1,
                paddingVertical: 5,
                borderColor: '#F0F1F2'
            },
            indicatorStyle: {
                backgroundColor: '#557DF3'
            }
        },
        Divider: {
            style: {
                paddingVertical: 5
            }
        }
    },
});

export const customstyles = StyleSheet.create({
    textHeading: {

    }
})
