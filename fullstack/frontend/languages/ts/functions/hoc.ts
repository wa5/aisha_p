var h=()=>{}
function j(anotherfunction:()=>void){
    anotherfunction()
}
j(h)
function j1():void{
    return 1
    return "gf"
    return []
    return {}
    return ()=>{}
}
function j2<T>(arg:T):T{
    return arg
    return "gf"
    return []
    return {}
    return ()=>{}
}
j2<number>()