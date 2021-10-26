import React, { Component } from 'react'
import Link from 'next/link'

export default class Index extends Component {
  static async getInitialProps() {
    console.log('loaded')
    return {}
  }

  render() {
    return (
      <div>
        <h2>Loja IT</h2>
        <br />
        <a href="/">Link padrão</a>
        <Link href="/">
          <span>Link via Next</span>
        </Link>
      </div>
    )
  }
}
