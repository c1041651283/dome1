const tableDataList = [];

for (let i = 0; i < 50; i++) {
    tableDataList.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
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
