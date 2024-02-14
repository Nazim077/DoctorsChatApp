import React from "react";
import {  Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "@expo/vector-icons/FontAwesome";
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { Block } from "galio-framework";

import { newTheme} from '../../constants/newTheme'

const ChatHeader = ({ userName, bio, userImg, onlineStatus, onPress }) => {
	// const navigation = useNavigation();
	return (
		<Block style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={onPress}>
				<Icon name="angle-left" size={30} color={newTheme.colors.white} />
			</TouchableOpacity>
			<Block style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					<Image style={styles.image} source={{ uri: userImg }} />
					<Block style={styles.userNameAndOnlineStatus}>
						<Text style={styles.userName}>{userName}</Text>
						<Text style={styles.onlineStatus}>{onlineStatus}</Text>
					</Block>
				</TouchableOpacity>
				<Block style={styles.options}>
					<TouchableOpacity
						onPress={() => navigation.navigate("OnCallScreen", {
							userName: userName,
							userImg: userImg
						})}
						style={{ paddingHorizontal: 5 }}
					>
						<Icon
							name="phone"
							size={30}
							color={newTheme.colors.white}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingHorizontal: 20 }}>
						<Icon
							name="ellipsis-v"
							size={30}
							color={newTheme.colors.white}
						/>
					</TouchableOpacity>
				</Block>
			</Block>
		</Block>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: newTheme.colors.primary,
		paddingTop: 40,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
	},
	userNameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	userName: {
		color: newTheme.colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: newTheme.colors.white,
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;

