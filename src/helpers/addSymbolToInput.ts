import { Symbol } from "src/types/types"

export const addSymbolToInput = (
    leftCurrency: string,
    rightCurrency: string,
    allCurrenciesSymbols: Symbol[],
    setLeftSymbol: React.Dispatch<React.SetStateAction<string|undefined>>,
    setRightSymbol: React.Dispatch<React.SetStateAction<string|undefined>>): void => {

    let leftSymbols: Symbol[] = allCurrenciesSymbols.filter((symbol) => {
        let res = symbol.abbreviation === leftCurrency
        return res
    })
    let rightSymbols = allCurrenciesSymbols.filter((symbol) => symbol.abbreviation === rightCurrency)

    setLeftSymbol(leftSymbols[0]?.symbol)
    setRightSymbol(rightSymbols[0]?.symbol)
}