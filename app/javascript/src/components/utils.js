import dayjs from "dayjs";

export const calculateElapsedTime = timestamp =>
  dayjs.unix(timestamp).fromNow();
