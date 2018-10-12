const dubble = (arg: number[]) => {
    let resultArray: number[] = [];
    let i: number;
    for (i = 0; i < arg.length; i++) {
        resultArray[i] = arg[i] * 2;
    };
    return resultArray;
}