import dayjs from "dayjs";

export const calculateElapsedTime = timestamp =>
  dayjs.unix(timestamp).fromNow();

export const formatTime = timestamp =>
  dayjs.unix(timestamp).format("dddd, h:mA");
