import { create } from "zustand";

interface SearchTextStore {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const useSearchTextStore = create<SearchTextStore>(set => ({
  searchText: '',
  setSearchText: searchText => set(() => ({ searchText: searchText }))
}) );

export default useSearchTextStore;