import "./InventoryList.scss";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";
import SearchHeader from "../../SearchHeader/SearchHeader";
import sortIcon from "../../../assets/Icons/sort-24px.svg";

import DeleteModal from "../../DeleteModal/DeleteModal";

function InventoryList({
  inventoryList,
  updateStatus,
  openModal,
  closeModal,
  deleteItem,
  activeInventoryId,
  isOpen,
}) {
  console.log(inventoryList);
  let modalData = inventoryList.find((inventory) => {
    return activeInventoryId === inventory.id;
  });

  return (
    <>
      {isOpen && (
        <DeleteModal
          deleteItem={deleteItem}
          closeModal={closeModal}
          isOpen={isOpen}
          warehouseName={modalData.name}
          id={activeInventoryId}
        />
      )}
      <div>
        <SearchHeader title={"Inventory"} urlPath={"/inventory"} />
        <div className="InventoryFilter">
          <div className="InventoryFilter__subsection InventoryFilter__subsection--width">
            <div className="InventoryFilter__tablet">
              <div className="InventoryFilter__tablet--width">
                <div className="InventoryFilter__labels">
                  <h4 className="InventoryFilter__labels-text">
                    Inventory item
                  </h4>
                  <img
                    src={sortIcon}
                    className="InventoryFilter__labels-icon"
                    alt="inventory item filter label"
                  ></img>
                </div>
              </div>
              <div className="InventoryFilter__tablet--width">
                <div className="InventoryFilter__labels">
                  <h4 className="InventoryFilter__labels-text">Category</h4>
                  <img
                    src={sortIcon}
                    className="InventoryFilter__labels-icon"
                    alt="category filter label"
                  ></img>
                </div>
              </div>
            </div>
            <div className="InventoryFilter__tablet">
              <div className="InventoryFilter__tablet--width">
                <div className="InventoryFilter__labels">
                  <h4 className="InventoryFilter__labels-text">Status</h4>
                  <img
                    src={sortIcon}
                    className="InventoryFilter__labels-icon"
                    alt="status filter label"
                  ></img>
                </div>
              </div>
              <div className="InventoryFilter__tablet--width">
                <div className="InventoryFilter__labels">
                  <h4 className="InventoryFilter__labels-text">Qty</h4>
                  <img
                    src={sortIcon}
                    className="InventoryFilter__labels-icon"
                    alt="quantity filter label"
                  ></img>
                </div>
              </div>
              <div className="InventoryFilter__tablet--width">
                <div className="InventoryFilter__labels">
                  <h4 className="InventoryFilter__labels-text">Warehouse</h4>
                  <img
                    src={sortIcon}
                    className="InventoryFilter__labels-icon"
                    alt="warehouse filter label"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="InventoryFilter__subsection InventoryFilter__subsection--flex">
            <div className="InventoryFilter__labels">
              <h4 className="InventoryFilter__labels-text">Actions</h4>
              <img
                src={sortIcon}
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
                <ul className="InventoryCard__sub-list InventoryCard__sub-list--margin1">
                  <li className="InventoryCard__list-details InventoryCard__list-details--margin1">
                    <h4 className="InventoryCard__list-title">
                      Inventory Item
                    </h4>
                    <div className="InventoryCard__link-item InventoryCard__link-item--margin">
                      <div className="InventoryCard__link body-medium">
                        {item.itemName}
                      </div>
                      <img
                        src={chevron}
                        alt="chevron linking to inventory item"
                      />
                    </div>
                  </li>
                  <li className="InventoryCard__list-details InventoryCard__list-details--margin2">
                    <h4 className="InventoryCard__list-title">Category</h4>
                    <p className="InventoryCard__info body-medium">
                      {item.category}
                    </p>
                  </li>
                </ul>
                <ul className="InventoryCard__sub-list InventoryCard__sub-list--margin2">
                  <li className="InventoryCard__list-details InventoryCard__list-details--margin3">
                    <h4 className="InventoryCard__list-title">Status</h4>
                    <p className="InventoryCard__info body-medium">
                      {updateStatus(item.quantity)}
                    </p>
                  </li>
                  <li className="InventoryCard__list-details InventoryCard__list-details--margin4">
                    <h4 className="InventoryCard__list-title">Qty</h4>
                    <p className="InventoryCard__info body-medium">
                      {item.quantity}
                    </p>
                  </li>
                  <li className="InventoryCard__list-details InventoryCard__list-details--margin4">
                    <h4 className="InventoryCard__list-title">Warehouse</h4>
                    <p className="InventoryCard__info body-medium">
                      {item.warehouseName}
                    </p>
                  </li>
                </ul>
              </ul>
              <div className="InventoryCard__buttons">
                <button
                  onClick={() => {
                    openModal(item.id).window.scrollTo(0, 0);
                  }}
                  type="button"
                  className="InventoryCard__button--delete"
                ></button>
                <div className="InventoryCard__button--edit"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default InventoryList;
