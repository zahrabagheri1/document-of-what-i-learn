// store is a function that returns a set of state and actions.
//store your state and actions in a single file

import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementByAmount: (amount: number) => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
},
incrementByAmount: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //after 1 second, increment the count 
    //async update the count
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
