export const objectToArray = (obj) => {
    let arrayData = [];
    Object.keys(obj).map((key, value) => {
        [Number(key), obj[key]]
        let objData = {
            title : key,
            value: value
        }
        arrayData.push(objData)
    });
    return arrayData;
}
