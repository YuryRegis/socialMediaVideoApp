import { useCallback } from "react";
import { Alert, Linking, Platform } from "react-native";
import Permissions, { PERMISSIONS } from "react-native-permissions";


const openSettingsAlert = useCallback(({title}: {title: string}) => {
    Alert.alert(title, '', [
      {
        isPreferred: true,
        style: 'default',
        text: 'Open Settings',
        onPress: () => Linking?.openSettings(),
      },
      {
        isPreferred: false,
        style: 'destructive',
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
}, []);


const checkAndroidPermissions = useCallback(async () => {
    if (parseInt(Platform.Version as string, 10) >= 33) {
      const permissions = await Permissions.checkMultiple([
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
      ]);
      if (
        permissions[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
          Permissions.RESULTS.GRANTED &&
        permissions[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
          Permissions.RESULTS.GRANTED
      ) {
        return;
      }
      const res = await Permissions.requestMultiple([
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
      ]);
      if (
        res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
          Permissions.RESULTS.GRANTED &&
        res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
          Permissions.RESULTS.GRANTED
      ) {
      }
      if (
        res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
          Permissions.RESULTS.DENIED ||
        res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.DENIED
      ) {
        checkAndroidPermissions();
      }
      if (
        res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
          Permissions.RESULTS.BLOCKED ||
        res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
          Permissions.RESULTS.BLOCKED
      ) {
        openSettingsAlert({
          title: 'Por gentileza, permita o acesso à galeria de fotos nas configurações.',
        });
      }
    } else {
      const permission = await Permissions.check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      if (permission === Permissions.RESULTS.GRANTED) {
        return;
      }
      const res = await Permissions.request(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      if (res === Permissions.RESULTS.GRANTED) {
        // TODO - check if this is needed
      }
      if (res === Permissions.RESULTS.DENIED) {
        checkAndroidPermissions();
      }
      if (res === Permissions.RESULTS.BLOCKED) {
        openSettingsAlert({
          title: 'Por gentileza, permita o acesso à galeria de fotos nas configurações.',
        });
      }
    }
  }, [openSettingsAlert]);


const checkPermission = useCallback(async () => {
if (Platform.OS === 'ios') {
    const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (permission === Permissions.RESULTS.GRANTED ||
        permission === Permissions.RESULTS.LIMITED) {
    return;
    }
    const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (res === Permissions.RESULTS.GRANTED ||
        res === Permissions.RESULTS.LIMITED) {
    }
    if (res === Permissions.RESULTS.BLOCKED) {
    openSettingsAlert({
        title: 'Please allow access to the photo library from settings',
    });
    }
} else if (Platform.OS === 'android') {
    checkAndroidPermissions();
}
}, [checkAndroidPermissions, openSettingsAlert]);


export const permissionService = {
    checkPermission,
};
