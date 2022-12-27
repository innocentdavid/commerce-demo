import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
// import { Head } from '@components/common' //
import { ManagedUIContext } from '@components/ui/context'
import Script from "next/script";
import Head from "next/head";

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head>
        <meta name="description" content="Real Estate and Homes For Sale. Put the power of 1MW to work for you. Sell Your Property Today. Unrivaled Expertise. List Your Property For Sale. The Best Listing Agents. Minnesota Licensed Real Estate Advisors. Delivering Exceptional Real Estate Experiences." />
        <title>1MW: Real Estate Marketing and Sales</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-177028475-14"></Script>
      <Script id="google_analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-177028475-14');
        `}
      </Script>
      <Script id="adroll">
        {`          
            adroll_adv_id = "ZM3RFOBYSNFZFPZK5IBZP2";
            adroll_pix_id = "EILZ42ERH5AX3MLIAKHKD6";
            adroll_version = "2.0";

            (function(w: obj, d: any, e:any, o: any, a: number) {
              w.__adroll_loaded = true;
            w.adroll = w.adroll || [];
            w.adroll.f = [ 'setProperties', 'identify', 'track' ];
            var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
            + "/roundtrip.js";
            for (a = 0; a < w.adroll.f.length; a++) {
              w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function (n) {
                return function () {
                  w.adroll.push([n, arguments])
                }
              })(w.adroll.f[a])
            }

            e = d.createElement('script');
            o = d.getElementsByTagName('script')[0];
            e.async = 1;
            e.src = roundtripUrl;
            o.parentNode.insertBefore(e, o);
    })(window, document);
            adroll.track("pageView");
        `}
      </Script>
      {/* <Script id="adroll">
        {`
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-177028475-14');
        </script>

        <script type="text/javascript">
            adroll_adv_id = "ZM3RFOBYSNFZFPZK5IBZP2";
            adroll_pix_id = "EILZ42ERH5AX3MLIAKHKD6";
            adroll_version = "2.0";

            (function(w: obj, d: any, e:any, o: any, a: number) {
              w.__adroll_loaded = true;
            w.adroll = w.adroll || [];
            w.adroll.f = [ 'setProperties', 'identify', 'track' ];
            var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
            + "/roundtrip.js";
            for (a = 0; a < w.adroll.f.length; a++) {
              w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function (n) {
                return function () {
                  w.adroll.push([n, arguments])
                }
              })(w.adroll.f[a])
            }

            e = d.createElement('script');
            o = d.getElementsByTagName('script')[0];
            e.async = 1;
            e.src = roundtripUrl;
            o.parentNode.insertBefore(e, o);
    })(window, document);
            adroll.track("pageView");
          </script>
        `}
      </Script> */}
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
