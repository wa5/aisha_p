interface Iobj<T>{
    a:string,
    b:string,
    //c?:string
    [key:string]:T
}

var obj:Iobj<number>={a:'apple',b:'boll'}
obj.y='JJ'
console.log(obj)