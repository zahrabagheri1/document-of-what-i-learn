import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    AddToBasket: (state, action) => {
      const alreadyExist = state.find(
        (x: { id: any }) => x.id === action.payload.id
      );
      if (alreadyExist) {
        const newBasket = state.map((item: { id: any; Count: number }) => {
          if (item.id === action.payload.id) {
            item.Count += 1;
          }
          return item;
        });
        return newBasket;
      }
      return [...state, { ...action.payload, Count: 1 }];
    },
    RemoveFromBasket: (state, action) => {
      const alreadyExist = state?.find(
        (x: { id: any }) => x.id === action.payload
      );
      if (alreadyExist) {
        const basketWithOutElement = state?.filter(
          (x: { id: any }) => x.id != action.payload
        );

        if (alreadyExist?.Count > 1) {
          const newBasket = state?.map((item: { id: any; Count: number }) => {
            if (item.id === action.payload) {
              item.Count -= 1;
            }
            return item;
          });
          return newBasket;
        }
        return basketWithOutElement;
      }
      return state;
    },
    RemoveAllBasket: () => {
      return [];
    },
  },
});

export const { AddToBasket, RemoveFromBasket, RemoveAllBasket } =
  BasketSlice.actions;
