import test from 'ava'
import { setupPptrTab, teardownPptrTab } from '../../tests/helpers'

test.beforeEach(setupPptrTab)

test('Show overlay UI when hover the element', async t => {
  const {page} = t.context;
  await page.hover('.dark.artboard.message')
  t.not(await page.$('visbug-hover'), null)
  t.pass()
})

test('Does not show overlay UI when hover the iframe element', async t => {
  const {page} = t.context;
  await page.hover('iframe')
  t.is(await page.$('visbug-hover'), null)
  t.pass()
})

test('Show special metatip when hover the iframe only', async t => {
  const {page} = t.context;
  await page.hover('iframe')
  t.is(await page.$('visbug-iframe'), null)
  t.pass()
})


test.afterEach(teardownPptrTab)
