var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var ask = ()=> {
	rl.question('Enter a number: ', (answer) => {
		if (answer === '\0')
		{
			rl.close();
			process.exit();
		}
		else
		{
			if (isNaN(answer) || isNaN(parseInt(answer)))
				console.log("\'%s\' is no a number", answer);
			else
				console.log("The number %d is %s", answer,
					(parseInt(answer) % 2 == 0) ? "even" : "odd");
			ask();
		}
	});
};
ask();

/**
 * Can a float number be even or odd?
 * 
It depends on how one defines the terms odd and even.

𝑓:ℤ→"𝑂𝑑𝑑","𝐸𝑣𝑒𝑛"
𝑓(𝑛)=𝑓(−𝑛)∀𝑛∈ℤ,𝑛<0
𝑓(0)="𝐸𝑣𝑒𝑛"
𝑓(1)="𝑂𝑑𝑑"
𝑓(𝑛)=𝑓(𝑛−2)

This is a recursive definition of checking if an integer is odd or even. One may restrict it to natural numbers if they will. According to this definition, my domain is the set of integers and hence it is not defined for floats.

Now consider an alternative definition:

𝑓:ℝ→"𝑂𝑑𝑑","𝐸𝑣𝑒𝑛"
𝑓(𝑛)=−𝑓(𝑛)
𝑛∈[−0.5,0.5)⟹𝑓(𝑛)="𝐸𝑣𝑒𝑛"
𝑛∈[0.5,1.5)⟹𝑓(𝑛)="𝑂𝑑𝑑"
𝑓(𝑛)=𝑓(𝑛−2)

This is another recursive definition, in which I simply round of my real number to the closest integer, and then use the same check as in the previous definition. According to this, the domain is the set of real numbers and hence works for floats.

The point is, it matters how you define what is odd or even. Mostly, it is limited to integers, and often to natural numbers but once can extend the definition to even complex numbers, or vectors. But then there is a question we must deal with! Do the properties yet hold? We know that the square of an odd number is always odd. Hence, consider the second definition, and the odd number 0.6.

0.62=0.36, which ∈[−0.5,0.5), is hence even. Therefore the property is lost. Should we yet call 0.6 odd? Perhaps yes, perhaps no. Here are the reasons why:

Perhaps yes:

The fact that square of an odd number is always odd follows from the definition where odd and even are limited to set of integers. Hence, if we change the definition, the property no more holds. Hence, there is no contradiction.

Perhaps no:

The intuitive understanding of odd and even from time immemorial has been closely connected to this property, such that this property is assumed to be an equivalent definition. Hence, one may consider that 0.6 is not odd, and that odd and even cannot be defined on set of reals/floats.

So now, make your choice! What do you want? Do you want to define odd and even on floats and rationals and reals and perhaps even matrices and break lose the old propositions and theorems that come from the old definition? Or do you want to retain the properties and theorems that are now central to our understanding of mathematics and numbers, and limit your definition to the set of integers.

It is a personal choice, and nothing else.

source: https://www.quora.com/Can-a-float-number-be-even-or-odd
*
*/