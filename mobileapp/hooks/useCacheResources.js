import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import {Asset} from "expo-asset";

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
                    'SFProDisplayBold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
                    'SFProDisplayLight': require('../assets/fonts/SF-Pro-Display-Light.otf'),
                    'SFProDisplayRegular': require('../assets/fonts/SF-Pro-Display-Regular.otf')
                });

                const images = [
                    require("../assets/img/1.png"),
                    require("../assets/img/places/1.png"),
                    require("../assets/img/places/2.png"),
                    require("../assets/img/places/3.png"),
                    require("../assets/img/places/4.png"),
                    require("../assets/img/places/5.png"),
                    require("../assets/img/places/6.png"),
                ];
                // Asset.loadAsync takes an array and this way we can load the images in parallel
                await Asset.loadAsync(images);
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                // await SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
