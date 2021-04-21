export function getArray(size, initialValue)
{
    let tmpArr = [];
    for(let i=0; i<size; i++)
        tmpArr.push(initialValue);
    return tmpArr;
}