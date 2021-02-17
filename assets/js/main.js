const output1 = document.getElementById("result1");
const output2 = document.getElementById("result2");
const splitMethod = "before"

const splitBtn = document.getElementById("splitBtn")
const strToSplit = document.getElementById("str-to-split");

strSplitInput = "mudder"
//let splitStrIndex = result.indexOf("Gebilde");

splitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("button geckickt")

    if (splitMethod != "before") {
        sliceStrAfter(strToSplit.value, strSplitInput);
        // dannach trennen
        function sliceStrAfter(strToSplit, strSplitInput) {
            let result = strToSplit.split(" ");
            let splitStrIndex = result.indexOf(strSplitInput);
            let slicedBefor2 = result.slice(0, splitStrIndex +1);
            let slicedAfter2 = result.slice(splitStrIndex +1);
            let slicedBeforStr2 = slicedBefor2.join(' ');
            let slicedAfterStr2 = slicedAfter2.join(' ');
            output1.innerHTML = slicedBeforStr2;
            output2.innerHTML = slicedAfterStr2;
        }
    } else {
        sliceStrBefor(strToSplit, strSplitInput);
        // davor trennen
        function sliceStrBefor(strToSplit, strSplitInput) {
            let result = strToSplit.split(" ");
            let splitStrIndex = result.indexOf(strSplitInput);
            let slicedBefor = result.slice(0, splitStrIndex);
            let slicedAfter = result.slice(splitStrIndex++);
            let slicedBeforStr = slicedBefor.join(' ');
            let slicedAfterStr = slicedAfter.join(' ');
            output1.innerHTML = slicedBeforStr;
            output2.innerHTML = slicedAfterStr;
        }
    }
})



function checkEqualStr(strSplitInput) {
    if (strSplitInput !== strSplitInput) {
        console.log("Nicht gefunde - tipp Achte auf die Rechtschreibung und Gross und kleinschreibung");
    }
}