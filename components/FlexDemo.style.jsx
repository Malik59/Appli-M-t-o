import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box1: {
        backgroundColor: "yellow",
        width: 100,
        height: 100
    },
    box2: {
        backgroundColor: "red",
        width: 100,
        height: 100
    },
    box3: {
        backgroundColor: "green",
        width: 100,
        height: 100
    }
})