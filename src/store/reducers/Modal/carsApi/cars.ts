import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface Cars {
      id: string,
      name: string,
      description: string,
      img: string
      ownerId: string
      rating: number,
      priceOfHours: number,
  
  }

export const carsApi = createApi({
      reducerPath: "cars",
      baseQuery: fetchBaseQuery({baseUrl: "https://652b92ef4791d884f1fde613.mockapi.io"}),
      endpoints: builder => ({
            fetchCars: builder.query<Cars[], void>({
                  query: () => "/cars",
            }),
            getCarById: builder.query({
                  query: (id) => ({
                        url: `/cars/${id}`,
                  })
            })
      })
})

export const { useFetchCarsQuery, useGetCarByIdQuery } = carsApi