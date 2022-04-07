import { SelectProps } from "src/types/types";

export const Select = ({
  allCurrencies,
  setCurrency,
  pickCurrency,
}: SelectProps) => {
    
  return (
    <select onChange={(e) => setCurrency(e.target.value)}>
      {allCurrencies.map((currency: string) => {
        return (
          <option key={currency}>
            {pickCurrency ? pickCurrency : currency}
          </option>
        );
      })}
    </select>
  );
};
