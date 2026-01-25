import Modal from "../ui/modal";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50"></div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="e. g. Running shoes"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="productPrice">Price (IDR)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="e. g. 50000"
                />
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="e. g. 100"
                />
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="category">category</label>
              <select name="category" id="category">
                <option value="" disabled>
                  select Category
                </option>
                <option value="running">Running</option>
                <option value="football">football</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
