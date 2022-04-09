import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4022bf0d9b1d4fa18e4a55bfe3920a77";
const token ="0064022bf0d9b1d4fa18e4a55bfe3920a77IAA0V0hTX+JgL1aTabYXqHj4BkqeL4hCW/SQAslQot7+wbSWhMYAAAAAEAAFO07nf2JSYgEAAQB/YlJi";
 // "0064022bf0d9b1d4fa18e4a55bfe3920a77IADk/9LhzjNxGDItq7/Bf3jED8ZFiwIFVj7gpCFTQCRFo7SWhMYAAAAAEAAJmhJvCAlHYgEAAQAICUdi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "darkduck";
