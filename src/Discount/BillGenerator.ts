import {  IBasket} from "./Product";
import { Rule } from "./Rules";
const prepareBasket: IBasket[] = [];

function checkout(goods: any, rules: Rule) {
  let unit: number = 0;
  let productId: number = 0;
  let ruleunitdiscuount: number = 0;
  let fullpriceunit: number = 0;
  let totaldiscount: number = 0;
  let perUnitPrice: number = 0;
  let productName: String = '';
  let totalPrice: number = 0;
  let rulediscuount: number = 0;
    rules.forEach(function(id) {
      if (id.id === goods.id && id.discountedPrice > 0 && goods.totalUnit > 0) {
        removeDuplicateProduct(prepareBasket, goods);
        productId = goods.id;
        productName = goods.product
        unit = goods.totalUnit;
        ruleunitdiscuount = id.unit;
        rulediscuount = id.discountedPrice;
        fullpriceunit = unit % ruleunitdiscuount;
        totaldiscount = Math.floor(unit / ruleunitdiscuount);
        perUnitPrice = id.price;
        totalPrice = fullpriceunit * perUnitPrice + totaldiscount * rulediscuount;
        const basket = {
          id: productId,
          name: productName,
          totalUnit: unit,
          perUnitPrice: perUnitPrice,
          totalPrice: totalPrice,
          isDiscounted: totaldiscount > 0 ? 'YES' : 'NO'
        };
        prepareBasket.push(basket);
      }
      else if (id.id === goods.id && goods.totalUnit > 0) {
        removeDuplicateProduct(prepareBasket, goods);
        productId = goods.id;
        productName = goods.product
        unit = goods.totalUnit;
        ruleunitdiscuount = id.unit;
        totalPrice = goods.totalUnit * goods.price;
        perUnitPrice = id.price;
        const basket = {
          id: productId,
          name: productName,
          totalUnit: unit,
          perUnitPrice: perUnitPrice,
          totalPrice: totalPrice,
          isDiscounted: totaldiscount > 0 ? 'YES' : 'NO'
        };
        prepareBasket.push(basket);
      }
    });
  return prepareBasket;
}
function removeDuplicateProduct(basket: any, item: any) {
  if (basket.length > 0) {
    for (var i = 0; i < basket.length; i++) {
      if (basket[i].id === item.id) {
        basket.splice(i, 1);
        i = i - 1;
      }
    }
    return basket;
  }
}
export default checkout;