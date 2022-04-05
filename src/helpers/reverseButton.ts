import { ReverseButton } from "src/types/types";


export const reverseButton = (props: ReverseButton): void => {
    const { leftCurrency, 
            rightCurrency,
            setLeftCurrency,
            setRightCurrency} = props;

    let swap = leftCurrency;
    setLeftCurrency(rightCurrency)
    setRightCurrency(swap)
}