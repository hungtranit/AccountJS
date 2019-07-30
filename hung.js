class Account{
	constructor(credit, debit, accountNumber){
	this.credit = credit,
	this.debit = debit,
	this.accountNumber = accountNumber
	}
}
var accounts = [];
// random account
for(i = 0; i < 20; i++){
	if(i % 3 == 0){
		accounts.push(new Account (RandomNumber(), RandomNumber(), i));
	}else if (i % 3 == 1){
		accounts.push(new Account (null, RandomNumber(), i));
	}else{
		accounts.push(new Account (null, null, i));
	}
}
function RandomNumber(){
	return Math.floor(Math.random() * 10) ;
}

// sort
function sortAccount(accounts){
	var  case1 = [];
	var case2 = [];
	var case3 = [];
	var result = [];
		for (var i = 0; i < accounts.length ; i++) {
			if(accounts[i].credit != null){
				case1.push(accounts[i]);
			} else if(accounts[i].debit != null){
			case2.push(accounts[i]);
			}else{
			case3.push(accounts[i]);
			}
   		 }
  
	case1.reverse();
	case2.reverse();
	case3.reverse();
	result.push(case1);
	result.push(case2);
	result.push(case3);
	return result;
}
console.log(sortAccount(accounts));