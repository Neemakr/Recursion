

// Javascript program to reverse digits of a number

/* Recursive function to reverse digits of num*/
var rev_num = 0;
var base_pos = 1;
function reverseDigits(num)
{

	if(num > 0)
	{
		reverseDigits(parseInt(num/10));
		let remainder = n%10
        result = result*10 + remainder
	}
	return rev_num;
}
	let num = 4562;
	document.write("Reverse of no. is "
		+ reverseDigits(num));
