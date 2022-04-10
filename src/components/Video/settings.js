import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4022bf0d9b1d4fa18e4a55bfe3920a77";
const token =
  "0064022bf0d9b1d4fa18e4a55bfe3920a77IABdL9ICvb8GTn34l1o3deaNGw10fgWZilt0SC7xjWBBALSWhMYAAAAAEAC5Yzmxz8lTYgEAAQDQyVNi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "darkduck";
