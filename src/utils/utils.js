export function build_bearer_token(user)
{
    const jwt_token = user.jwt_token;
    console.log("bearer token : ", `Bearer ${jwt_token}`)
    return `Bearer ${jwt_token}`;
}

export function getArray(size, initialValue)
{
    let tmpArr = [];
    for(let i=0; i<size; i++)
        tmpArr.push(initialValue);
    return tmpArr;
}