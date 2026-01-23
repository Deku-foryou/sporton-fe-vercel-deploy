import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";

const ProductManagement = () => {
  return (
    <div>
      <div className="flex justify-between tems-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Product Management</h1>
          <p className="opacity-50">Manage Your invertory, prices and stock.</p>
        </div>
        <Button className="rounded-lg">
          <FiPlus size={24}/>
        </Button>
      </div>
      <ProductTable/>
    </div>
  );
};

export default ProductManagement;
