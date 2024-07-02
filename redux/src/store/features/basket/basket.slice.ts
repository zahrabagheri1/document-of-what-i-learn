import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

interface BasketItem {
  id: any;
  Count: number;
}

export const BasketSlice = createSlice({
  name: "basket",
  initialState: [] as BasketItem[],
  reducers: {
    AddToBasket: (state, action: PayloadAction<any>) => {
      return produce(state, (draft) => {
        const alreadyExist = draft.find(
          (x: { id: any }) => x.id === action.payload.id
        );
        if (alreadyExist) {
          alreadyExist.Count += 1;
        } else {
          draft.push({ ...action.payload, Count: 1 });
        }
      });
      // AddToBasket: (state, action) => {
      //   const alreadyExist = state?.find(
      //     (x: { id: any }) => x.id === action.payload.id
      //   );
      //   if (alreadyExist) {
      //     alreadyExist.Count += 1;
      //   } else {
      //    state.push({...action.payload, Count: 1 });
      //   }
      // },
    },
    RemoveFromBasket: (state, action: PayloadAction<any>) => {
      return produce(state, (draft) => {
        const alreadyExist = draft.find(
          (x: { id: any }) => x.id === action.payload
        );

        if (alreadyExist) {
          if (alreadyExist?.Count > 1) {
            alreadyExist.Count -= 1;
          } else {
            return draft.filter((x: { id: any }) => x.id !== action.payload);
          }
        }
      });
      // const alreadyExist = state?.find(
      //   (x: { id: any }) => x.id === action.payload
      // );

      // if (alreadyExist) {
      //   if (alreadyExist.Count > 1) {
      //     alreadyExist.Count -= 1;
      //   } else {
      //     return state.filter((x: { id: any }) => x.id !== action.payload);
      //   }
      // }
    },
    RemoveAllBasket: () => {
      return [];
    },
  },
});

export const { AddToBasket, RemoveFromBasket, RemoveAllBasket } =
  BasketSlice.actions;
