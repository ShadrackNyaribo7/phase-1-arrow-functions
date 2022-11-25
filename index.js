const foo = function() {
    return 'bar';
  }
  const nums = [4,5,6];
const squares = nums.map(x => x ** 2); 
squares; //=> [16,25,36]
nums; //=> [4,5,6]


const sum = (car, apple) => {
    console.log(`Adding ${car}`);
    console.log(`Adding ${apple}`);
    return car+ apple;
  }
  sum(1,2); //=> 3

finishedItems = overdueTodoItems.map( item => item.className = "complete" );
header.innerText = `You finished ${finishedItems.length} items!`;

lapsedUserAccounts.map( u => sendBillTo(u.address) );