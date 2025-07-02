import { create } from "zustand";
import { getFakestore } from "../services/fakestore.service";
import { adaptFakestore } from "../utils/fakestore.utils";

export const useFakestoreStore = create((set) => ({
    fakestore: [],
    getFakestore: async () => {
        const fakestore = await getFakestore();
        set({ fakestore: fakestore.map(adaptFakestore)});
    }
}))