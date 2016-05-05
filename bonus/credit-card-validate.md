##Credit Card Validation

The Luhn formula is sometimes used to validate credit card numbers. Create the function `isCreditCardValid(digitArr)` that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:
1. Set aside the last digit and do not include it in these calculations (until step 5);
2. Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
3. If any results are larger than 9, subtract 9 from them;
4. Add all numbers (not just our odds) together;
5. Now add the last digit back in – the sum should be a multiple of 10.

For example, given digit array `[5,2,2,8,2]`, it would become 1) `[5,2,2,8]`, then 2) `[5,4,2,16]`, then 3) `[5,4,2,7]`, then 4) `18`, then 5) `20`, so we would return `true`. If the final digit were any other value, we would return `false`.
