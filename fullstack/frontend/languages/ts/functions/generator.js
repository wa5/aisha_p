function* s(){
    yield '1'
    yield '2'
    yield '3'
    yield '4'
}
var p1call=s()
console.log("person1",p1call.next())
console.log("person1",p1call.next())
console.log("person1",p1call.next())
console.log("person1",p1call.next())
console.log("person1",p1call.next())

console.log("person2",s().next())
console.log("person3",s().next())