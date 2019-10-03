const wrap = (line, maxLen) => {
if (line.length <= maxLen) {
    return line;
}

const indexOfBlank = line.lastIndexOf(' ', maxLen);
let split;
let offset;
if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
} else {
    split = maxLen;
    offset = 0;

}
return line.substring(0, split) + "\n" + wrap(line.substring(split + offset), maxLen);
}

    // let lineArr = line.split('');
    // let spaceIndex = lineArr.indexOf(' ');
    // for (let i =0; i < lineArr.length; i++){
    //     if (spaceIndex <= maxLen) {
    //      let nextSpaceIndex = lineArr.slice(spaceIndex+1).indexOf(' ')
    //         spaceIndex = spaceIndex + nextSpaceIndex;
    //     } else if (spaceIndex > maxlen) {
    //         lineArr = lineArr.splice([nextspaceIndex], 0, '&');
    //     }
    // }
    // console.log(lineArr, 'testing after if/else')
    // return lineArr.join('')







//    let lineArr = line.split('');
//    console.log(lineArr)
    // let spaceIndex = line.indexOf(' ');
    // console.log(spaceIndex)
    // if (spaceIndex <= maxLen) {
    //     let firstLine = line.slice(0, maxLen)
    //     console.log(firstLine, 'firstLine')
    // } 
    //  if (spaceIndex > maxLen){
    //     let secondLine = line.slice(maxLen +1)
    //     console.log(secondLine, 'secondLine')
    // }
    // return firstLine.concat(secondLine);










//    for (let i = 0; i <lineArr.length; i++) {
//        let char = lineArr[i];
//        if (char===' '&&)

    //        lineArr.slice(0, maxLen)
    //    }
    //    console.log('after slice', lineArr)
       
//    }
   
// }

//slice it at maxLen and when we join we'll join with '\n'


module.exports = wrap;