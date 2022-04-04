import React from "react";

export interface IListCurrencies {
    allCurrencies: string[],
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>,
    leftCurrency: string,
    rightCurrency: string

}