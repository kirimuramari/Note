import { Snackbar } from "react-native-paper";

type Props = {
    visible: boolean;
    message: string;
    onDismiss: () => void;
};

export default function AppSnackbar({
    visible,
    message,
    onDismiss,
}: Props) {
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={3000}
        >
        {message}
        </Snackbar>
    );
}