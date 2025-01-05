"use client";
import { createContext, useContext } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export default DataContext;
