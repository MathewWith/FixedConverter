
export interface ListCurrenciesProps {
    allCurrencies: string[],
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>,
    rightCurrency: string,
    leftCurrency: string
}

export interface SelectProps {
    allCurrencies: string[];
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
    currentCurrency: string;
}