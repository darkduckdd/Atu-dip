import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4022bf0d9b1d4fa18e4a55bfe3920a77";
const token =
  "0064022bf0d9b1d4fa18e4a55bfe3920a77IAA0V0hTX+JgL1aTabYXqHj4BkqeL4hCW/SQAslQot7+wbSWhMYAAAAAEAAFO07nf2JSYgEAAQB/YlJi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "darkduck";
