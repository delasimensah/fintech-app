import { useAssets } from "expo-asset";
import { View, Text, TouchableOpacity } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";

import { defaultStyles } from "@/constants/styles";

const HomeScreen = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View className="flex-1 justify-between">
      {assets && (
        <Video
          source={{ uri: assets[0].uri }}
          isMuted
          isLooping
          shouldPlay
          resizeMode={ResizeMode.COVER}
          className="absolute h-full w-full"
        />
      )}

      <View className="mt-20 p-5">
        <Text className="text-4xl font-black uppercase text-white">
          Ready to change the way you money?
        </Text>
      </View>

      <View className="mb-[60px] flex-row justify-center gap-5 px-5">
        <Link
          href="/login"
          style={defaultStyles.pillButton}
          className="bg-dark flex-1"
          asChild
        >
          <TouchableOpacity>
            <Text className="text-[20px] font-medium text-white">Login</Text>
          </TouchableOpacity>
        </Link>

        <Link
          href="/register"
          style={defaultStyles.pillButton}
          className="flex-1 bg-white"
          asChild
        >
          <TouchableOpacity>
            <Text className="text-[20px] font-medium">Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default HomeScreen;
