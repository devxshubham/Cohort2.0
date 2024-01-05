/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			
		];    
function calculateTotalSpentByCategory(transactions) {
  let expense = [];
  for( let i in transactions){
    let {price,categ} = transactions[i];
    for (let x=0; x<i; x++){
      if(categ in expense[x]){
        expense[x].price += price ;
      }
      else{
        expense.push({category: categ, totalSpent : price})
      }
    }
  }

  return expense;
}

		const result =
			calculateTotalSpentByCategory(transactions);
      console.log(result)

module.exports = calculateTotalSpentByCategory;
