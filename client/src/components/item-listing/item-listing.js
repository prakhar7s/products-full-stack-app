import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchItemList } from "../../redux/actions/item.actions";
import ItemCard from "../item-card/item-card";
import ItemInputForm from "../item-input-form/item-input-form";

const ItemListing = (props) => {
  const { fetchItemList, itemsList } = props;
  const [displayFormModal, setFormModal] = useState(false);
  const [editItemConfig, setEditItemConfig] = useState(null);
  useEffect(() => {
    if (!itemsList) fetchItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddProduct = () => {
    setFormModal(true);
  };

  useEffect(() => {
    if (editItemConfig) {
      setFormModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItemConfig]);

  if (itemsList === null) return;

  return (
    <div>
      <ItemInputForm
        displayFormModal={displayFormModal}
        setFormModal={setFormModal}
        editItemConfig={editItemConfig}
        setEditItemConfig={setEditItemConfig}
      />
      <div className="mt-4 d-flex justify-content-between">
        <p className="m-0 fs-18 fw-500">Products</p>
        <button
          className="btn btn-outline-primary px-4 py-1 fs-16 fw-500"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      {itemsList?.length === 0 && (
        <div>
          <p className="m-0 fw-400 fs-16 mt-2">No Items</p>
          <p className="m-0 fw-500 fs-16 mt-1 fc-primary">
            Add new items by Clicking on Add Product button
          </p>
        </div>
      )}
      {itemsList?.length > 0 && (
        <div className="row p-0 mt-4">
          {itemsList?.map((item) => (
            <div className="col-12 col-md-4 pe-2 mb-4" key={item?._id}>
              <ItemCard item={item} setEditItemConfig={setEditItemConfig} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapDisptachToProps = {
  fetchItemList,
};

const mapStateToProps = (state) => ({
  itemsList: state.itemReducer.itemsList,
});

export default connect(mapStateToProps, mapDisptachToProps)(ItemListing);
