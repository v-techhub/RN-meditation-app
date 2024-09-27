import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default {
  index: (props: any) => (
    <MaterialCommunityIcons name="lightbulb-on-outline" size={24} {...props} />
  ),
  sleep: (props: any) => <Feather name="moon" size={24} {...props} />,
  forYou: (props: any) => <Feather name="home" size={24} {...props} />,
};
