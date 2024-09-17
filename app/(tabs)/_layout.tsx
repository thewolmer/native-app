import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#007AFF",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerTitleAllowFontScaling: true,
					headerShadowVisible: false,
					tabBarIcon: ({ color }) => (
						<Ionicons name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",
					tabBarIcon: ({ color }) => (
						<Ionicons name="code" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
