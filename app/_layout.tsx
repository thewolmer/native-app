import { Stack } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

const MainLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="(modals)/main"
				options={{
					presentation: "modal",
					headerShown: false,
				}}
			/>
		</Stack>
	);
};

export default MainLayout;
