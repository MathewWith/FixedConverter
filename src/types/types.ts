
export interface ReverseButton {
    leftCurrency: string,
    rightCurrency: string,
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>
}


export interface ListCurrenciesTypes {
    allCurrencies: string[],
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>,
    leftCurrency: string,
    rightCurrency: string

}

export interface SelectProps {
    allCurrencies: string[],
    setCurrency: React.Dispatch<React.SetStateAction<string>>,
    currentCurrency: string
}