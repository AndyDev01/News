import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setfilters] = useState(initialFilters);

  const changeFilter = (key, value) => {
    setfilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter };
};
