## This app must use
* Object factories 
* Composition
* Redux to create, store and manage data in state
* Dictionary formatting of data
* CSS modules
* Custom elements

Object factory
<!-- Something like. Taking user input of a postcode/house number and filtering it though a function to create a full address object-->




-- typescript?
-- shadow dom?
-- next.js?
-- mobx?

## Stage 1, summarise features you want to implement and figure our a way to visually combine them

<!-- Object factory or factory function  -->

    functions that create objects and return them

    const dog = () => {
        const sound = 'woof'
        return {
            talk : () => console.log(shound)
        }
    }

    const sniffles = dog()
    sniffles.talk() // output 'woof'

<!-- Composition -->
    Designing types around what they do

    const barker = (state) => ({
        bark: () => console.log(`woof, i am a ${state.name}`)
    })
    const driver = (state) => ({
        drive: () => state.position = state.position + state.speed
    })
    barker({name: 'karo}).bark

<!-- Composed Object factory -->
const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }
    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )
}
murderRobotDog('sniffles).bark()

## testing with mocha
<!-- test runner for JS. -->
 describe('functionName' () => {
     it('works in the basic case', () => {

     })
 })
<!--terminal-->
cd my-app
mocha filename.js

## typescrypt

<!-- providing types as values to parameters -->
function(key: type)

<!--  auto imports in vs code-->
take home programming test
put together a presentation 

## Key: Value store

<!-- A key value store is a dictionary 
 A little node server that silos data
 http verb POST/GET/DELETE
 
 node.js key value store
 node basics
 

-->