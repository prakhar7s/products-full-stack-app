import toast from "react-hot-toast";

export const MESSAGE_TYPES = {
  ADD_ITEM_SUCCESS: "New Item Added Successfully",
  UPDATE_ITEM_SUCCESS: "Item Updated Successfully",
  DELETE_ITEM_SUCCESS: "Item Deleted Successfully",
};

export const showToast = (type) => {
  if (!MESSAGE_TYPES[type]) return;

  toast.success(MESSAGE_TYPES[type], {
    position: "bottom-center",
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};
