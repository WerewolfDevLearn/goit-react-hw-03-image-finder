interface ImessageComp {
  message: string;
}

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Message({ message }: ImessageComp) {
  const notify = () => toast.error(message, { toastId: "error" });
  notify();
  return (
    <>
      <ToastContainer />
    </>
  );
}
