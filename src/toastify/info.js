import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastInfo = () => {
  return toast.info(`Contact is already exist`, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
