import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/orders",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query(body) {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
    }),
    getOrders: builder.query({
      query(email) {
        return {
          url: `/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi;
export default orderApi;
