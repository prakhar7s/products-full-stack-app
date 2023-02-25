import { connect } from "react-redux";
import { deleteItem } from "../../redux/actions/item.actions";
import { ItemRating } from "../item-rating/item-rating";

import "./item-card.css";

const ItemCard = ({ item, deleteItem, setEditItemConfig }) => {
  const handleDeleteItem = () => {
    deleteItem(item?._id);
  };
  const handleEditItem = () => {
    setEditItemConfig(item);
  };
  return (
    <div className="border rounded p-3 position-relative item-card">
      <div className="position-absolute align-items-center justify-content-end w-100 pe-4 pt-2 d-flex d-md-none overlay-buttons">
        <i
          class="bi bi-pencil mx-2 fs-18 pointer overlay-button text-secondary d-flex align-items-center justify-content-center rounded-circle"
          onClick={handleEditItem}
        ></i>
        <i
          class="bi bi-trash3 mx-2 fs-18 pointer overlay-button text-danger d-flex align-items-center justify-content-center rounded-circle"
          onClick={handleDeleteItem}
        ></i>
      </div>
      <div>
        <img
          alt="Item"
          className="rounded mb-2"
          src={item?.imageUrl}
          width="100%"
          style={{
            width: "100%",
            height: 200,
            objectFit: "contain",
          }}
        />
      </div>
      <p className="m-0 fs-20 fw-600 fc-primary">{item?.name}</p>
      <p className="m-0 fs-16 fw-400 my-1 text-truncate">{item?.description}</p>
      <p className="m-0 fs-16 fw-500 fc-2b">Rs. {item?.price}.00</p>
      <p className="m-0 fs-16 fw-500 fc-2b text-muted">
        Save Rs. {item?.discount}.00 at Checkout
      </p>
      <ItemRating rating={item?.rating} />
    </div>
  );
};
const mapDisptachToProps = {
  deleteItem,
};

export default connect(null, mapDisptachToProps)(ItemCard);
