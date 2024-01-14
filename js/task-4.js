// Оголошена функція getShippingCost(country)
// У тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"
function getShippingCost(country) {
	switch (country) {
		case "China":
			return `Shipping to ${country} will cost 100 credits`	
		case "Chile": 
			return `Shipping to ${country} will cost 250 credits`
		case "Australia": 
			return `Shipping to ${country} will cost 170 credits`
		case "Jamaica": 
			return `Shipping to ${country} will cost 120 credits`
		default: 
			return "Sorry, there is no delivery to your country"
	}
}