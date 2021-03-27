import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react"; 

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    "SFProDisplayBold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
                    "SFProDisplayLight": require("../assets/fonts/SF-Pro-Display-Light.otf"),
                    "SFProDisplayRegular": require("../assets/fonts/SF-Pro-Display-Regular.otf")
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.error(e);
            } finally {
                setLoadingComplete(true);
                // await SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
