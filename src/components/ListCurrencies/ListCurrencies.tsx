import React from "react";
import { ListCurrenciesProps } from "src/types/CurrencyTypes";
import { Select } from "../Select/Select";
import "./ListCurrencies.scss";

export const ListCurrencies = ({
  allCurrencies,
  setLeftCurrency,
  setRightCurrency,
  leftCurrency,
  rightCurrency,
}: ListCurrenciesProps) => {
    
    return (
    <div className="list-currencies">
      <Select
        allCurrencies={allCurrencies}
        setCurrency={setLeftCurrency}
        currentCurrency={leftCurrency}
      />
      <Select
        allCurrencies={allCurrencies}
        setCurrency={setRightCurrency}
        currentCurrency={rightCurrency}
      />
    </div>
  );
};
