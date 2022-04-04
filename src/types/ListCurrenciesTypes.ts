import React from "react";

export interface ListCurrenciesTypes {
    allCurrencies: string[],
    setInputCurrency: React.Dispatch<React.SetStateAction<string>>,
    setOutputCurrency: React.Dispatch<React.SetStateAction<string>>
}