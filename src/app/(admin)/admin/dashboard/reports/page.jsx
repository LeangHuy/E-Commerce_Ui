import { getAllOrdersAdmin } from '@/service/order.service';
import React from 'react';
import Header from '../components/Header';
import ExportToExcel from './ExportToExcel';

const ReportPage = async ({ searchParams: { tab = "Overview" } }) => {
    const orders = await getAllOrdersAdmin();
    const formattedDate = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD format
    return (
        <div className="w-full">
            <Header tab={tab} />
            <div className="content p-5 bg-gray-100">
                <div className="bg-white rounded-2xl p-5">
                    {/* <ExportToExcel data={orders} fileName="OrdersReport" /> */}

                    {Object.entries(
                        orders
                            .filter((o) => o?.orderResponse.orderDetail?.length > 0)
                            .reduce((acc, order) => {
                                const date = new Date(order.orderResponse.orderDate).toLocaleDateString();
                                if (!acc[date]) {
                                    acc[date] = [];
                                }
                                acc[date].push(order);
                                return acc;
                            }, {})
                    )
                        .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
                        .map(([date, groupedOrders]) => (
                            <div key={date} className="mb-6">
                                <div className="flex justify-between">
                                    <div><h1 className="text-2xl font-bold mb-4">Report on {date}</h1></div>
                                    <div><ExportToExcel data={groupedOrders} fileName={`OrdersReport_${formattedDate}`} /></div>
                                </div>



                                <div className="card-overview flex flex-col gap-6">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Invoice</th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Product name</th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Unit Price</th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Quantity</th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Discount</th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Ext Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {groupedOrders.map((order) => (
                                                    <tr key={order?.orderResponse?.orderId} className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">{order?.orderResponse?.invoiceId}</td>

                                                        <td className="px-6 py-4">
                                                            {order.orderResponse.orderDetail.map((product) => (
                                                                <div key={product.id}>
                                                                    {product.productName}
                                                                </div>
                                                            ))}
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            {order.orderResponse.orderDetail.map((product) => (
                                                                <div key={product.id}>$ {product.unitPrice}</div>
                                                            ))}
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            {order.orderResponse.orderDetail.map((product) => (
                                                                <div key={product.id}>{product.orderQty}</div>
                                                            ))}
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            {order.orderResponse.orderDetail.map((product) => (
                                                                <div key={product.id}>% {product.discount}</div>
                                                            ))}
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            {order.orderResponse.orderDetail.map((product) => (
                                                                <div key={product.id}>$ {product.totalProductPrice}</div>
                                                            ))}
                                                        </td>
                                                    </tr>
                                                ))}

                                                {/* Total Price Row */}
                                                <tr>
                                                    <td colSpan="5" className="px-6 py-4 font-bold text-right">Total Price:</td>
                                                    <td className="px-6 py-4 font-bold">
                                                        $ {groupedOrders.reduce((acc, order) => {
                                                            const totalOrderPrice = order.orderResponse.orderDetail.reduce(
                                                                (sum, product) => sum + product.totalProductPrice, 0
                                                            );
                                                            return acc + totalOrderPrice;
                                                        }, 0)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
