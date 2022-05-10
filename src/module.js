console.log('module')

async function iff () {
    return await Promise.resolve('async')
}

iff().then(console.log)
