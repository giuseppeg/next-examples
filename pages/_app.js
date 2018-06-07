import DefaultApp, { Container } from 'next/app'

export default class App extends DefaultApp {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component } = this.props
    return (
      <Container>
        <Component>
          {(data) =>
            <div>
            {JSON.stringify(data)}
            </div>
          }
        </Component>
      </Container>
    )
  }
}
