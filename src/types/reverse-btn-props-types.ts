
export interface reverseButtonPropsTypes {
    isReversed: boolean,
    setRightInputValue: React.Dispatch<React.SetStateAction<string>>,
    setIsReversed: React.Dispatch<React.SetStateAction<boolean>>,
    setLeftInputValue: React.Dispatch<React.SetStateAction<string>>,
    leftInputValue: string,
    rightInputValue: string
}