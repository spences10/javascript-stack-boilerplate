import { render } from '@testing-library/react'
import React from 'react'
import App from './app'

describe('App', () => {
  it('Render without error', () => {
    render(<App />)
  })
})
