import { createStore } from "zustand/vanilla";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { handleGetCurrentUser } from "@/services/user";

export type CounterState = {
  count: number;
  apikey?: String | null;
  user?: any;
};

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
  setAccessToken: (token: String) => void;
  setUser: (data: any) => void;
  removeUser: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (): CounterState => {
  return { count: 100 };
};

export const defaultInitState: CounterState = {
  count: 0,
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return create<CounterStore>()(
    persist(
      (set, get) => ({
        ...initState,
        decrementCount: () => set((state) => ({ count: state.count - 1 })),
        incrementCount: () => set((state) => ({ count: state.count + 1 })),
        setAccessToken: (token) => set((state) => ({ apikey: token })),
        setUser: (user) => set((state) => ({ user })),
        removeUser: () => set((state) => ({ user: null, apikey: null })),
      }),
      {
        name: "counter", // name of the item in the storage (must be unique)
      }
    )
  );
};
