import "./InventoryList.scss";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";
import SearchHeader from "../../SearchHeader/SearchHeader";

function InventoryList({ inventoryList, updateStatus }) {
  return (
    <>

      <div>
        <SearchHeader />
      <div className="InventoryFilter">
        <div className="InventoryFilter__subsection">
          <div className="InventoryFilter__labels">
            <h4 className="InventoryFilter__labels-text">Inventory item</h4>
            <img
              className="InventoryFilter__labels-icon"
              alt="inventory item filter label"
            ></img>
          </div>
          <div className="InventoryFilter__labels">
            <h4 className="InventoryFilter__labels-text">Category</h4>
            <img
              className="InventoryFilter__labels-icon"
              alt="category filter label"
            ></img>
          </div>
          <div className="InventoryFilter__labels">
            <h4 className="InventoryFilter__labels-text">Status</h4>
            <img
              className="InventoryFilter__labels-icon"
              alt="status filter label"
            ></img>
          </div>
          <div className="InventoryFilter__labels">
            <h4 className="InventoryFilter__labels-text">Qty</h4>
            <img
              className="InventoryFilter__labels-icon"
              alt="quantity filter label"
            ></img>
          </div>
        </div>
        <div className="InventoryFilter__subsection">
          <div className="InventoryFilter__labels">
            <h4 className="InventoryFilter__labels-text">Warehouse</h4>
            <img
              className="InventoryFilter__labels-icon"
              alt="warehouse filter label"
            ></img>
          </div>
          <div className="InventoryFilter__labels">
            <h4 className="InventoryFilter__labels-text">Actions</h4>
            <img
              className="InventoryFilter__labels-icon"
              alt="actions label"
            ></img>
          </div>
        </div>
      </div>

      {inventoryList.map((item) => {
        return (
          <div className="InventoryCard" key={item.id}>
            <ul className="InventoryCard__content-list">
              <ul className="InventoryCard__sub-list">
                <li className="InventoryCard__list-details">
                  <h4 className="InventoryCard__list-title">Inventory Item</h4>
                  <div className="InventoryCard__link-item">
                    <div className="InventoryCard__link body-medium">
                      {item.itemName}
                    </div>
                    <img
                      src={chevron}
                      alt="chevron linking to inventory item"
                    />
                  </div>
                </li>
                <li className="InventoryCard__list-details">
                  <h4 className="InventoryCard__list-title">Category</h4>
                  <p className="InventoryCard__info body-medium">
                    {item.category}
                  </p>
                </li>
              </ul>
              <ul className="InventoryCard__sub-list">
                <li className="InventoryCard__list-details">
                  <h4 className="InventoryCard__list-title">Status</h4>
                  <p className="InventoryCard__info body-medium">
                    {updateStatus(item.quantity)}
                    {/* {item.status} */}
                  </p>
                </li>
                <li className="InventoryCard__list-details">
                  <h4 className="InventoryCard__list-title">Qty</h4>
                  <p className="InventoryCard__info body-medium">
                    {item.quantity}
                  </p>
                </li>
                <li className="InventoryCard__list-details">
                  <h4 className="InventoryCard__list-title">Warehouse</h4>
                  <p className="InventoryCard__info body-medium">
                    {item.warehouseName}
                  </p>
                </li>
              </ul>
            </ul>
            <div className="InventoryCard__buttons">
              <button
                type="button"
                className="InventoryCard__button--delete"
              ></button>
              <div className="InventoryCard__button--edit"></div>
            </div>
          </div>
        );
      })};

      </div>
    </>
  );
}

export default InventoryList;
