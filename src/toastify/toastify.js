// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const toastSuccess = () => {
//   return toast.success(`You added a contact`, {
//     position: "top-center",
//     autoClose: 1500,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// };

// export const toastError = () => {
//   return toast.error("Some filed is empty", {
//     position: "top-center",
//     autoClose: 1500,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// };

// export const toastInfo = () => {
//   return toast.info(`Contact is already exist`, {
//     position: "top-center",
//     autoClose: 1500,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// };

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (type, message) => {
  const options = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      console.error(`Unknown toast type: ${type}`);
  }
};
