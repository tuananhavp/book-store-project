import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query(body) {
        return {
          url: "/orders",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
export default orderApi;
