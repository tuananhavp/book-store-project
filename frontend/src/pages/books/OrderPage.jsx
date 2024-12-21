import { useAuth } from "../../context/AuthContext";
import { useGetOrdersQuery } from "../../redux/features/order/orderApi";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const { data: orders = [] } = useGetOrdersQuery(currentUser.email);
  console.log(orders);

  return (
    <div className="mb-4">
      {orders?.map((order) => {
        return (
          <div className="mb-8" key={order._id}>
            <h3 className="font-semibold">
              Order ID: <p>{order._id}</p>
            </h3>
            <p>Name: {order.name}</p>
            <p>Phone: {order.phone}</p>
            <h3 className="font-semibold">Address:</h3>
            <p>
              {order.address.city}, {order.address.state},
              {order.address.country}, {order.address.zipcode}
            </p>
            {/* <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p> */}
            <p>Total Price: ${order.totalPrice}</p>
            <ul>
              {order.productIds.map((item) => (
                <li key={item.id}>
                  <p>Product ID: {item}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default OrderPage;
