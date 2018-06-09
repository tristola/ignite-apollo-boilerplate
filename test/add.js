const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('adds the proper npm module and component example', async t => {
  // spy on few things so we know they're called
  const addModule = sinon.spy()
  const addPluginComponentExample = sinon.spy()
  
  // mock a context
  const context = {
    ignite: { addModule, addPluginComponentExample }
  }

  await plugin.add(context)
  
  t.true(addModule.calledWith('react-native-MODULENAME', { link: true }))
  t.true(
    addPluginComponentExample.calledWith('ApolloBoilerplateExample.js', {
      title: 'ApolloBoilerplate Example'
    })
  )
})
