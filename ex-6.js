// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let a = companyName.length - 1; a >= 0; a--) {
    reversedCompanyName += companyName[a]
}

console.log(reversedCompanyName);
