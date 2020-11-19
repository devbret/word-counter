function main() {
    //Main program variables.
    const userInput = document.querySelector(`#userInput`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Text analysis event listener.
    submit.addEventListener(`click`, function(){
        //Confirming that the user has input a value into the text field before performing the work count actions.
        if (userInput.value.length >= 1) {
            //Create an array of strings from the user input field.
            const predata = userInput.value.split(` `);
            //Filter out and/or convert all irrelevant characters.
            const data = predata.reduce(function(total,d){
                //Ignore empty spaces and empty strings.
                if (d !== " " && d !== "") {
                    let proxy = d.toLowerCase();
                    let temp = d.split(``);
                    let outcome = [];
                    //Create strings with only lowercase English characters.
                    for (let i = 1; i < temp.length; i++) {
                        if (proxy.charCodeAt(i) >= 97 && proxy.charCodeAt(i) <= 122) {
                            outcome.push(temp[i]);
                        }
                    }
                    //Push the result to the on-going total.
                    const preoutcome = outcome.join(``);
                    total.push(preoutcome);
                }
                return total;
            },[]);
            //Create an array of unique words.
            let uniqueWords = data.reduce(function(total,d){
                //Determine if the word already exists within the uniqueWords array.
                if (total.every(t => t !== d)) {
                    total.push(d);
                }
                return total;
            },[]);
            //Display the final counts for both total words overall and total unique words.
            output.innerHTML = `Your submitted text has a total of <b>${data.length}</b> words overall and a total of <b>${uniqueWords.length}</b> unique words.`;
        }
    });
}
main();
