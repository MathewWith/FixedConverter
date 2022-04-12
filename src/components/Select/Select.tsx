import { SelectProps } from "src/types/types";

export const Select = ({
  allCurrencies,
  setCurrency,
  currentCurrency
}: SelectProps) => {
    
  return (
    <select onChange={(e) => setCurrency(e.target.value)} value={currentCurrency}>
      {allCurrencies.map((currency: string) => {
        return (
          <option key={currency}>
            {currency}
          </option>
        );
      })}
    </select>
  );
};
