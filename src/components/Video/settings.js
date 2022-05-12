import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4022bf0d9b1d4fa18e4a55bfe3920a77";
const token =
  "0064022bf0d9b1d4fa18e4a55bfe3920a77IACtSA9EsklXpUHER/to6ePfvaEcZVqmaIvtqvpPNGzZPrSWhMYAAAAAEAA5DUG6m3x+YgEAAQCafH5i";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "darkduck";
