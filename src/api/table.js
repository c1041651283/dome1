const tableDataList = [];

for (let i = 0; i < 30; i++) {
    tableDataList.push({
        key: i,
        name: `Edward King ${i}`,
        age: Math.floor(Math.random()*100),
        address: `London, Park Lane no. ${i}`,
    });
}

export function getTableData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tableDataList)
        },1000)
    })
}

let data = [];

export function getCharData(params){
    return new Promise((resolve) => {
        setTimeout(() => {
            let j = 0;
            for(let i = 0; i < tableDataList.length; i++){
                if(i < params.limit * params.page && i >= params.limit * (params.page - 1)){
                    data[j++] = tableDataList[i];
                }
            }
            resolve(data)
        },1000)
    })
}