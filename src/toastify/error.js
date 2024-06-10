import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastError = () => {
  return toast.error("Some filed is empty", {
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
