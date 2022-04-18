
export interface Symbol {
    currency: string,
    abbreviation: string,
    symbol: string
}

export interface addSymbolToInputProps {
    leftCurrency: string,
    rightCurrency: string,
    allCurrenciesSymbols: any[],
    setLeftSymbol: React.Dispatch<React.SetStateAction<string|undefined>>,
    setRightSymbol: React.Dispatch<React.SetStateAction<string|undefined>>
}

export interface ReverseButtonProps {
    leftCurrency: string,
    rightCurrency: string,
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>
}


export interface ListCurrenciesProps {
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
