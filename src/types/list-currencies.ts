export interface ListCurrenciesType {
    allCurrencies: string[],
    leftInputValue: string,
    rightInputValue: string,
    isReversed: boolean,
    setLeftInputValue: React.Dispatch<React.SetStateAction<string>>,
    setRightInputValue: React.Dispatch<React.SetStateAction<string>>
}