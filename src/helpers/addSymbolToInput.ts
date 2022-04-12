import { addSymbolToInputProps} from "src/types/PropsOfFunctions"

export const addSymbolToInput = ({
    leftCurrency,
    rightCurrency,
    allCurrenciesSymbols,
    setLeftSymbol,
    setRightSymbol
}: addSymbolToInputProps): void => {

    let leftSymbols = allCurrenciesSymbols.filter((symbol) => symbol.abbreviation === leftCurrency)

    let rightSymbols = allCurrenciesSymbols.filter((symbol) => symbol.abbreviation === rightCurrency)

    setLeftSymbol(leftSymbols[0]?.symbol)
    setRightSymbol(rightSymbols[0]?.symbol)
}