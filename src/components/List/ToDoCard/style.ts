import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 64,
        widh: 327,
        backgroundColor: '#262626',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        
    },
    checkbox: {
        height: 20,
        width: 20,
        marginLeft: 12,
        borderRadius: 50,
        borderColor: '#4EA8DE',
        fontSize: 14
    },
    task: {
        fontSize: 14,
        width: 235,
        color: '#F2F2F2',
        paddingRight: 8,
        paddingLeft: 12, 
    },
    trash: {
        height: 32,
        width: 32,
    }
})