// input = "school kids are smarts"
// output = "loohcs sdid era strams"

// Approach , first 

function reverseEach (str) {
    
    let str2 = str.split("");
    console.log(str2);
    let rev = str2.reverse();
    console.log(rev);
    let join1 = rev.join("");
    console.log(join1);
    let str3 = join1.split(" ");
    console.log(str3);
    let rev1 = str3.reverse();
    console.log(rev1);
    let final = rev1.join(" ");
    console.log(final);

    // Approach Second using map

    let reverseWord = str.split(" ");
    let finalReverse = reverseWord.map((word) => 
    word.split("").reverse().join(""));
    console.log(finalReverse.join(" "));
}

reverseEach("school kids are smarts");