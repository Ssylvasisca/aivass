"use client";

export default function PurchaseOrdersPage() {
  const poData = [
    { id: 1, poNumber: "PO-2024-001", items: 5, qty: 250, status: "Submitted" },
    { id: 2, poNumber: "PO-2024-003", items: 2, qty: 100, status: "Shipped" },
  ];

  return (
    <div className="space-y-6 text-black">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Purchase Orders</h1>
        <p className="text-gray-500 text-sm">Daftar PO yang diterima dari PPIC Epson</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <div className="flex items-center text-sm text-gray-600">
            <span>Tampilkan</span>
            <select className="mx-2 border border-gray-300 rounded px-2 py-1">
              <option>10</option>
            </select>
            <span>entri</span>
          </div>
          <input
            type="text"
            placeholder="🔍 Cari PO..."
            className="pl-4 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm focus:border-blue-500 outline-none"
          />
        </div>

        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-700 font-bold border-b">
            <tr>
              <th className="px-6 py-4">No</th>
              <th className="px-6 py-4">PO Number</th>
              <th className="px-6 py-4">Total Item</th>
              <th className="px-6 py-4">Total Qty</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {poData.map((po, index) => (
              <tr key={po.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 font-bold text-blue-600">{po.poNumber}</td>
                <td className="px-6 py-4">{po.items}</td>
                <td className="px-6 py-4">{po.qty}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    po.status === "Submitted" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {po.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}