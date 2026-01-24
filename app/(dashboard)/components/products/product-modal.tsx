import Modal from "../ui/modal";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="w-50"></div>
      <div className="flex flex-col gap-4">
         <div className="input-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text"
            id="productName"          
            name="productName"
            placeholder="e. g. Running shoes"
            />
         </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
