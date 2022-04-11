import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4022bf0d9b1d4fa18e4a55bfe3920a77";
const token =
  "0064022bf0d9b1d4fa18e4a55bfe3920a77IAD/C2P1+2R9gNy5sHJBhbbmW5Fry4Uj9u7GzrfJPFQS5rSWhMYAAAAAEAC5Yzmx6ddUYgEAAQDq11Ri";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "darkduck";
