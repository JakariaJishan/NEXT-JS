import { SessionProvider } from "next-auth/react"
import Navbar from "../components/navbar"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}