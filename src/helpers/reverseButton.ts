import { IReverseButton } from "src/types/IReverseButton";


export const reverseButton = (props: IReverseButton): void => {
    const { leftCurrency, 
            rightCurrency,
            setLeftCurrency,
            setRightCurrency} = props;

    let swap = leftCurrency;
    setLeftCurrency(rightCurrency)
    setRightCurrency(swap)
}