export interface IRule {
    id: number
    price: number
    discountedPrice: number
    unit: number
  }
  export type Rule = IRule[]
const rules: Rule = [
    { id: 1, price: 50, discountedPrice: 130, unit: 3 },
    { id: 2, price: 30, discountedPrice: 45, unit: 2 },
    { id: 3, price: 20, discountedPrice: 0, unit: 1 },
    { id: 4, price: 15, discountedPrice: 0, unit: 1 }
]
export default rules;