let tableDataList = [
    {
        info:'aaa',
        content:'bbb',
    },
    {
        info:'aaa',
        content:'bbb',
    },
    {
        info:'aaa',
        content:'bbb',
    },
    {
        info:'aaa',
        content:'bbb',
    },
    {
        info:'aaa',
        content:'bbb',
    },
];

export function getProfileData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tableDataList)
        },1000)
    })
}

export function setProfileData(userForm){
    return new Promise((resolve) => {
        setTimeout(() => {
            tableDataList = [];
            tableDataList = JSON.parse(JSON.stringify(userForm))
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