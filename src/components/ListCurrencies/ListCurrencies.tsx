import { ListCurrenciesProps } from "src/types/types";
import { Select } from "../Select/Select";

export const ListCurrencies = ({
  allCurrencies,
  setLeftCurrency,
  setRightCurrency,
  rightCurrency,
  leftCurrency,
}: ListCurrenciesProps) => {

  return (
    <div className="list-currencies">
      <Select
        allCurrencies={allCurrencies}
        setCurrency={setLeftCurrency}
        pickCurrency={leftCurrency}
      />
      <Select
        allCurrencies={allCurrencies}
        setCurrency={setRightCurrency}
        pickCurrency={rightCurrency}
      />
    </div>
  );
};

