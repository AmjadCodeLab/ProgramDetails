//input = ["may","june","july","august","september"]
//output = ["May","June","July","August","September"]

var FirstCharUpper = function(Arr) {
    let UpdatedMonth = [];
    for (let months of Arr){
        months = months.charAt(0).toUpperCase() +months.charAt(1).toUpperCase() + months.substring(2);
        UpdatedMonth.push(months);
    }
console.log(UpdatedMonth);
}
FirstCharUpper(["may","june","july","august","september"]);
