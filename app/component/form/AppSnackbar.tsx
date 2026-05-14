import { Snackbar } from "react-native-paper";
import {StyleSheet} from"react-native";


export type SnackbarType =
| "success"
| "error";
type Props = {
    visible: boolean;
    message: string;
    type: SnackbarType;
    onDismiss: () => void;
};


export default function AppSnackbar({
    visible,
    message,
    onDismiss,
    type
}: Props) {
    const snackbarStyles = {
        success:styles.success,
        error:styles.error,
    };
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={3000}
		style={snackbarStyles[type]}
        >
        {message}
        </Snackbar>
    );
}

const styles = StyleSheet.create({
	success:{
        backgroundColor: "#2E7D32"
    },
	error:{
        backgroundColor: "#D32F2F"
    }

	

});
