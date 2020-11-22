const tableDataList = [];

for (let i = 0; i < 30; i++) {
    tableDataList.push({
        key: i,
        name: `Edward King ${i}`,
        age: Math.floor(Math.random()*100),
        address: `London, Park Lane no. ${i}`,
        date:'2020/11/5'
    });
}
let date1 = "2020/12/5"
let date = tableDataList.filter(function (x){
    if((new Date(date1)).getFullYear().getTime() == (new Date(x.date)).getFullYear().getTime()
        && ((new Date(date1)).getMonth()+1).getTime() == ((new Date(x.date)).getMonth()+1).getTime()){
        return true;
    }
})

export function getTableData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(date)
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