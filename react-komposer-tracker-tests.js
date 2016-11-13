import React from 'react'
import {composeWithTracker} from './react-komposer-tracker'
import {Session} from 'meteor/session'
import {expect} from 'meteor/practicalmeteor:chai'
import {sinon} from 'meteor/practicalmeteor:sinon';
import ReactTestUtils from 'react-addons-test-utils'

describe('react-komposer-tracker', () => {
  it('should be defined', () => {
    expect(composeWithTracker).to.be.ok
  })

  it('should invoke reactive mapper function', () => {
    const Component = props => <div>{props.something}</div>
      const mapper = sinon.stub().yields(null, { something: 'something' })
    const Container = composeWithTracker(mapper)(Component)
    const renderer = ReactTestUtils.createRenderer()
    renderer.render(<Container />)
    expect(mapper).to.have.been.called
    const element = renderer.getRenderOutput()
    expect(element.props.something).to.equal('something')
  })

  // mmm...
  // it('should invoke function reactively', () => {
  //   const Component = props => <div>{props.something}</div>
  //     const mapper = (props, onData) => onData(null, { something: Session.get('sessionkey') })
  //   Session.set('sessionkey', 'first')
  //   const Container = composeWithTracker(mapper)(Component)
  //   const renderer = ReactTestUtils.createRenderer()
  //   renderer.render(<Container />)
  //   const element = renderer.getRenderOutput()
  //   expect(element.props.something).to.equal('first')
  //   Session.set('sessionkey', 'second')
  //   const element2 = renderer.getRenderOutput()
  //   expect(element2.props.something).to.equal('second')
  // })
})
