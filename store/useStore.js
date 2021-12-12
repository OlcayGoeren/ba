import create from "zustand";

import guidethroughSlice from "./guidethroughSlice";
import qrSlice from "./qrSlice";

const useStore = create((set, get) => ({
  ...guidethroughSlice(set, get),
  ...qrSlice(set,get)
}));

export default useStore;
