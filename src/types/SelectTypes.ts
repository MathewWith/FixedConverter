import React from "react";

export interface SelectProps {
    allCurrencies: string[],
    setCurrency: React.Dispatch<React.SetStateAction<string>>,
    pickCurrency: string
}