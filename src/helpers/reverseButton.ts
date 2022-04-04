import { IReverseButton } from "src/types/IReverseButton";


export const reverseButton = (props: IReverseButton): void => {
    const { isReversed, 
            setRightInputValue, 
            setIsReversed, 
            setLeftInputValue, 
            leftInputValue, 
            rightInputValue, 
            leftCurrency, 
            rightCurrency,
            setLeftCurrency,
            setRightCurrency} = props;
    
    setIsReversed((prev: boolean) => !prev)
    isReversed === true?  setRightInputValue(leftInputValue) : setLeftInputValue(rightInputValue)

    let swap = leftCurrency;
    setLeftCurrency(rightCurrency)
    setRightCurrency(swap)
}