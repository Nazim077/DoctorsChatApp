import React, { useState, useEffect, useRef, memo } from "react";
import {
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity,
	Dimensions
} from "react-native";

// import Animated, {
// 	useSharedValue,
// 	withSpring,
// 	withTiming,
// 	useAnimatedStyle,
// } from "react-native-reanimated";

// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import EmojiPicker from "./emojis/EmojiPicker";
// import EmojiPicker from '../Constant/emoji/EmojiPicker'

import { useKeyboard } from "@react-native-community/hooks";

import { newTheme} from '../../constants/newTheme'
import { Block} from 'galio-framework'
const { width, height } = Dimensions.get('screen')

const ChatInput = ({ reply, closeReply, isLeft, userName }) => {
	const [message, setMessage] = useState("");
	// const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	// const height = useSharedValue(70);

	// useEffect(() => {
	// 	if (showEmojiPicker) {
	// 		height.value = withTiming(400);
	// 	} else {
	// 		height.value = reply ? withSpring(130) : withSpring(70);
	// 	}
	// }, [showEmojiPicker]);

	// useEffect(() => {
	// 	if (reply) {
	// 		height.value = showEmojiPicker ? withTiming(450) : withTiming(130);
	// 	} else {
	// 		height.value = showEmojiPicker ? withSpring(400) : withSpring(70);
	// 	}
	// }, [reply]);

	// const heightAnimatedStyle = useAnimatedStyle(() => {
	// 	return {
	// 		height: height.value
	// 	}
	// })


	return (
		<Block style={[styles.container]}>
			{reply ? (
				<Block style={styles.replyContainer}>
					<TouchableOpacity
						onPress={closeReply}
						style={styles.closeReply}
					>
						<MaterialCommunityIcons name="close" color="#000" size={20} />
					</TouchableOpacity>
					<Text style={styles.title}>
						Response to {isLeft ? userName : "Me"}
					</Text>
					<Text style={styles.reply}>{reply}</Text>
				</Block>
			) : null}
			<Block style={styles.innerContainer}>
				<Block style={styles.inputAndMicrophone}>
					<TouchableOpacity
						style={styles.emoticonButton}
						// onPress={() => setShowEmojiPicker((value) => !value)}
					>
						{/* <Icon
							name={
								showEmojiPicker ? "close" : "emoticon-outline"
							}
							size={23}
							color={newTheme.colors.description}
						/> */}
					</TouchableOpacity>
					<TextInput
						multiline
						placeholder={"Type something..."}
						style={styles.input}
						value={message}
						onChangeText={(text) => setMessage(text)}
					/>
					<TouchableOpacity style={styles.rightIconButtonStyle}>
						<Feather
							name="paperclip"
							size={20}
							color={newTheme.colors.description}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.rightIconButtonStyle}>
						<FontAwesome
							name="camera"
							size={20}
							color={newTheme.colors.description}
						/>
					</TouchableOpacity>
				</Block>
				<TouchableOpacity style={styles.sendButton}>
					<MaterialCommunityIcons
						// name={message ? "send" : "microphone"}
						name="send"
						size={20}
						color={newTheme.colors.white}
					/>
				</TouchableOpacity>
			</Block>
			{/* <EmojiPicker /> */}
		</Block>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		// backgroundColor: newTheme.colors.messageBackground,
		// marginTop : 2,
		// height: height * 0.2
	},
	replyContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	title: {
		marginTop: 5,
		fontWeight: "bold",
	},
	closeReply: {
		position: "absolute",
		right: 10,
		top: 5,
	},
	reply: {
		marginTop: 5,
	},
	innerContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 10,
	},
	inputAndMicrophone: {
		flexDirection: "row",
		backgroundColor: newTheme.colors.white,
		flex: 3,
		marginRight: 10,
		paddingVertical: Platform.OS === "Android" ? 10 : 0,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "space-between",
		elevation : 5
	},
	input: {
		backgroundColor: "transparent",
		paddingLeft: 20,
		color: newTheme.colors.inputText,
		flex: 3,
		fontSize: 15,
		height: 50,
		alignSelf: "center",
	},
	rightIconButtonStyle: {
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 15,
		paddingLeft: 10,
		borderLeftWidth: 1,
		borderLeftColor: "#fff",
	},
	swipeToCancelBlock: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 30,
	},
	swipeText: {
		color: newTheme.colors.description,
		fontSize: 15,
	},
	emoticonButton: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 10,
	},
	recordingActive: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 10,
	},
	recordingTime: {
		color: newTheme.colors.description,
		fontSize: 20,
		marginLeft: 5,
	},
	microphoneAndLock: {
		alignItems: "center",
		justifyContent: "flex-end",
	},
	lockBlock: {
		backgroundColor: "#eee",
		width: 60,
		alignItems: "center",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		height: 130,
		paddingTop: 20,
	},
	sendButton: {
		backgroundColor: newTheme.colors.primary,
		borderRadius: 50,
		height: 50,
		width: 50,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ChatInput;
