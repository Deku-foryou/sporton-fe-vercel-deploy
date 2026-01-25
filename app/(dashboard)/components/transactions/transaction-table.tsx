import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: "+123123123 ",
    total: 1500000,
    status: "pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe 2",
    contact: "+123123123 ",
    total: 2500000,
    status: "rejected",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe 3",
    contact: "+123123123 ",
    total: 1000000,
    status: "paid",
  },
];

type TTransactionTableProps = {
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse table-fixed">
        <thead>
          <tr className="border-b border-gray-200">
           <th className="px-6 py-4 font-semibold text-sm w-[18%]">Date</th>
            <th className="px-6 py-4 font-semibold text-sm w-[20%]">Customer</th>
            <th className="px-6 py-4 font-semibold text-sm w-[17%]">Contact</th>
            <th className="px-6 py-4 font-semibold text-sm w-[15%]">Total</th>
            <th className="px-6 py-4 font-semibold text-sm w-[12%] text-center">Status</th>
            <th className="px-6 py-4 font-semibold text-sm w-[18%] text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactionData.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {data.date}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 truncate">
                {data.customer}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{data.contact}</td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {priceFormatter(data.total)}
              </td>

              <td className="px-6 py-4">
                <div
                  className={`mx-auto px-3 py-1 rounded-full border text-center w-fit text-[11px] font-bold uppercase tracking-wider ${getStatusColor(
                    data.status
                  )}`}
                >
                  {data.status}
                </div>
              </td>
              
              <td className="px-6 py-4">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-2 mx-auto cursor-pointer hover:text-orange-600 font-medium text-sm transition-colors text-gray-600 group"
                >
                  <FiEye size={16} className="group-hover:scale-110 transition-transform" />
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;