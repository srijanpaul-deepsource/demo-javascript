import { format } from 'path'
import * as fs from 'fs' 

class S {}

new S()

const arr = []
if (arr.length > 0) {
    // ??
}

const set = new Set()
if (set.size > 0) {
    // > . <
}

if (arr.length < 0) {

}


const fun = async () => {
    return await Promise.resolve(new Promise(() => 1)) 
}

fun()