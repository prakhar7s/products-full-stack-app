import { connect } from "react-redux";
import { addNewItem, updateItem } from "../../redux/actions/item.actions";
import Modal from "react-bootstrap/Modal";

const ItemInputForm = ({
  displayFormModal,
  setFormModal,
  addNewItem,
  editItemConfig,
  setEditItemConfig,
  updateItem,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (editItemConfig) {
      formData.set("id", editItemConfig?._id);
      updateItem(formData);
    } else {
      addNewItem(formData);
    }
    setFormModal(false);
  };
  return (
    <div>
      <Modal
        onBackdropClick={() => {
          setEditItemConfig(null);
        }}
        show={displayFormModal}
        onHide={() => {
          setFormModal(false);
          setEditItemConfig(null);
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {editItemConfig
              ? `Edit ${editItemConfig?.name}`
              : "Create New Item"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label className="fs-16 fw-500 mb-1">Name</label>
              <input
                defaultValue={editItemConfig?.name}
                required
                name="name"
                placeholder="Item Name"
                className="form-control shadow-sm"
              />
            </div>

            <div className="mb-3">
              <label className="fs-16 fw-500 mb-1">Description</label>
              <textarea
                defaultValue={editItemConfig?.description}
                type="text"
                name="description"
                placeholder="Item Description"
                className="form-control shadow-sm"
              />
            </div>

            <div className="mb-3">
              <label className="fs-16 fw-500 mb-1">Price</label>
              <input
                required
                defaultValue={editItemConfig?.price}
                type="number"
                name="price"
                placeholder="Item Price"
                className="form-control shadow-sm"
                max={999999}
                min={1}
              />
            </div>
            <div className="mb-3">
              <label className="fs-16 fw-500 mb-1">Discount</label>
              <input
                defaultValue={editItemConfig?.discount}
                type="number"
                name="discount"
                placeholder="Item Discount"
                className="form-control shadow-sm"
                max={999999}
                min={1}
              />
            </div>
            <div className="mb-3">
              <label className="fs-16 fw-500 mb-1">Rating</label>
              <input
                required
                defaultValue={editItemConfig?.rating}
                type="number"
                name="rating"
                placeholder="Item Rating"
                className="form-control shadow-sm"
                max={5}
                min={1}
              />
            </div>

            <div className="mb-4">
              <label className="fs-16 fw-500 mb-1">Image</label>
              <input
                required={!editItemConfig}
                type="file"
                name="image"
                className="form-control shadow-sm"
                accept="image/*"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="btn btn-outline-primary shadow-sm px-5"
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapDisptachToProps = {
  addNewItem,
  updateItem,
};

export default connect(null, mapDisptachToProps)(ItemInputForm);
