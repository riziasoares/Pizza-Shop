import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text based on order status', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    // wrapper.debug()
    const statusText = wrapper.getByText('Pendente')

    expect(statusText).ToBeIntheDocument()
  })
})
