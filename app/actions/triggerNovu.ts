import { Novu } from "@novu/node";

const novu = new Novu("c0154a5916cb538df4bf6de3f7f6a52b");

type triggerNovuProps = {
  subscriberId: string;
  email: string;
  payload: {
    userName: string;
    userAvatar: string;
    userComment: string;
    replyUrl: string;
  };
};

export function triggerNovu({
  email,
  payload,
  subscriberId,
}: triggerNovuProps) {
  novu.trigger("chat-message", {
    to: {
      subscriberId: subscriberId,
      email: email,
    },
    payload: payload,
  });
}
