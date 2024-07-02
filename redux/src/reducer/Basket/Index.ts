import { ActionType } from "../../context/store";

export enum BasketType {
  AddToBasket,
  RemoveFromBasket,
  RemoveAllBasket,
}

export const Basketreducer = (state: any, action: ActionType<BasketType>) => {
  switch (action.type) {
    case BasketType.AddToBasket: {
      const alreadyExist = state?.find((x: { id: any; }) => x.id === action.payload.id);
      if (alreadyExist) {
        const newBasket = state?.map((item: { id: any; Count: number; }) => {
          if (item.id === action.payload.id) {
            item.Count += 1;
          }
          return item;
        });
        return newBasket;
      }
      return [...state, { ...action.payload, Count: 1 }];
    }
    case BasketType.RemoveFromBasket: {
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
    }
    case BasketType.RemoveAllBasket:
      return [];
    default:
      return state;
  }
};
