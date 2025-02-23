import { Tabs } from "expo-router";
import { AntDesign, FontAwesome6, Ionicons, Feather } from '@expo/vector-icons';
import { useAuth } from "@clerk/clerk-expo";

export default function TabLayout() {
    const { signOut } = useAuth()
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: "black", 
            headerRight: () => 
            <Feather 
            name="log-out" 
            size={22} 
            color="black" 
            style= {{ paddingRight: 10}} 
            onPress={() => signOut()}
            />
            }}
            >

            <Tabs.Screen name="index" 
            options={{ headerTitle: "Reddit",
                 headerTintColor: "#FF5700",
                  title: "Home",
                   tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />}}/>

            <Tabs.Screen name="chat" 
            options={{ title: "Chat",
             tabBarIcon: ({ color }) => <AntDesign name="wechat" size={24} color={color} />}}/>   

             <Tabs.Screen name="communities" 
            options={{ title: "Communities",
             tabBarIcon: ({ color }) => <FontAwesome6 name="people-group" size={24} color={color} />}}/>

             <Tabs.Screen name="create" 
            options={{ title: "Create",
             tabBarIcon: ({ color }) => <Ionicons name="create" size={24} color={color} />,
             headerShown: false,
             tabBarStyle: { display: "none"}}}/>

             <Tabs.Screen name="inbox" 
            options={{ title: "Inbox",
             tabBarIcon: ({ color }) => <AntDesign name="inbox" size={24} color={color} />}}/> 
        </Tabs>
    )
}