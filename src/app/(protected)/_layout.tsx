import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AppLayout() {
    const { isSignedIn } = useAuth()
    if (!isSignedIn) {
        return <Redirect href={'/signIn'} />
      }
    return(
        <Stack>
            <Stack.Screen name="(tabs)" 
            options={{ headerShown: false}}/>

            <Stack.Screen name='groupSelector'
            options={{ headerShown: false}}/>

            <Stack.Screen name="post/[id]" 
            options={{ headerTitle: " ", 
            headerStyle: { backgroundColor: "#FF5700"}, 
            animation: "slide_from_bottom",
            headerBackButtonDisplayMode: "minimal"}}/>
            
        </Stack>
    )
}