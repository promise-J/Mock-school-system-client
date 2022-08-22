import ACTIONS from "./index";

export const dispatchNotify = (status, message) => {
  return {
    type: ACTIONS.NOTIFY,
    payload: {
      message,
      status: ["error", "success", "neutral"].includes(status)
        ? status
        : "neutral",
    },
  };
};

export const dispatchUnNotify = (notificationId) => {
  return {
    type: ACTIONS.UNNOTIFY,
    payload: { id: notificationId },
  };
};
