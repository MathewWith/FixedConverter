
export const Select= (props: any) => {
    const {allCurrencies} = props
    const {setCurrency} = props                       
    return (
        <select onChange={(e) => setCurrency(e.target.value)}>
                {
                    allCurrencies.map((cur: any) => {
                       return <option key={cur}>{cur}</option>
                    })
                }
        </select>
    )
}