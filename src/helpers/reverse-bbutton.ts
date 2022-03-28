import { reverseButtonPropsTypes } from "src/types/reverse-btn-props-types";


export const reverseButton = (props: reverseButtonPropsTypes): void => {
    const {isReversed, setRightInputValue, setIsReversed, setLeftInputValue, leftInputValue, rightInputValue} = props;
    
    setIsReversed((prev: boolean) => !prev)
    isReversed === true?  setRightInputValue(leftInputValue) : setLeftInputValue(rightInputValue)
}