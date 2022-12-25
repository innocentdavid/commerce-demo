import { useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    const video1 = useRef<HTMLInputElement>(null);
    const video2 = useRef<HTMLInputElement>(null);
    const video3 = useRef<HTMLInputElement>(null);
    const video4 = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const attemptPlay = () => {
            video1 &&
                video1.current &&
                video1.current.play().catch(error => {
                    console.error("Error attempting to play", error);
                });
            video2 &&
                video2.current &&
                video2.current.play().catch(error => {
                    console.error("Error attempting to play", error);
                });
            video3 &&
                video3.current &&
                video3.current.play().catch(error => {
                    console.error("Error attempting to play", error);
                });
            video4 &&
                video4.current &&
                video4.current.play().catch(error => {
                    console.error("Error attempting to play", error);
                });

            // elementsRef.current.map(el => {
            //     el &&
            //         el.current &&
            //         el.current.play().catch(error => {
            //             console.error("Error attempting to play", error);
            //         });

            // }) 

        };
        attemptPlay();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Mike Wilen | Real State</title>
                <meta name="description" content="Mike Wilen Real State" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main>
                <section className='about-header mb-5'>
                    <Container>
                        <Row>
                            <Col md={6} className="p-0">
                                <div className='video-container'>
                                    <video
                                        style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
                                        playsInline
                                        loop
                                        muted
                                        // alt="All the devices"
                                        src={'/1-Mike-Wilen-Final-Black-and-White.mp4'}
                                        ref={video1}
                                    />
                                    {/* <img src='/leadership1.jpeg' className='w-100 h-100' /> */}
                                </div>
                            </Col>
                            <Col md={6} className="p-0">
                                <div className='video-container'>
                                    <video
                                        style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
                                        playsInline
                                        loop
                                        muted
                                        // alt="All the devices"
                                        src={'/1-Top-1MW-3.mp4'}
                                        ref={video2}
                                    />
                                    {/* <img src='/leadership2.jpeg' className='w-100 h-100' /> */}
                                </div>
                            </Col>
                            <Col md={6} className="p-0">
                                <div className='video-container'>
                                    <video
                                        style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
                                        playsInline
                                        loop
                                        muted
                                        // alt="All the devices"
                                        src={'/1-Downtown-Minneapolis.mp4'}
                                        ref={video3}
                                    />
                                    {/* <img src='/remote38.jpeg' className='w-100 h-100' /> */}
                                </div>
                            </Col>
                            <Col md={6} className="p-0">
                                <div className='video-container'>
                                    <video
                                        style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
                                        playsInline
                                        loop
                                        muted
                                        // alt="All the devices"
                                        src={'/1-Minnesota-Video.mp4'}
                                        ref={video4}
                                    />
                                    {/* <img src='/remote40.jpeg' className='w-100 h-100' /> */}
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>

                <section className='experiences'>
                    <Container>
                        <div>
                            <h1 className='main-heading'>
                                A leader in the marketing and sale of real estate.
                                {/* We build <br />stunning online <br />experiences */}
                            </h1>
                            <p className='main-description'>
                                1MW is made up of highly skilled individual whose highest priority is
                                serving you. Say goodbye to the days when a real estate transaction was
                                time-consuming and exhausting! Instead, experience the 1MW difference.
                            </p>
                        </div>

                        <div className='services-section'>
                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                                    <h2 className='service-heading border-bottom w-100'>
                                        What We Do
                                    </h2>
                                    {/* <Link href="/" className='viewall-link'>
                      View all
                  </Link> */}
                                </div>
                                <Row>
                                    <Col md={10} lg={8} sm={12}>
                                        {/* <div className='service-outer'> */}
                                        {/* <h4 className='service-title'>
                        Marketing Website
                      </h4> */}
                                        <p className='service-description'>
                                            Setting the bar for the highest standard of comprehensive, white-glove
                                            real estate service in the industry, 1MW, led by real estate expert
                                            Mike Wilen, boasts expertise combined with an unparalleled global
                                            network across residential and commercial markets.
                                        </p>
                                        {/* </div> */}
                                    </Col>
                                    {/* <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col> */}
                                </Row>

                            </div>
                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                                    <h2 className='service-heading border-bottom w-100'>
                                        Marketing
                                    </h2>
                                    {/* <Link href="/" className='viewall-link'>
                      View all
                  </Link> */}
                                </div>
                                <Row>
                                    <Col md={10} lg={8} sm={12}>
                                        {/* <div className='service-outer'> */}
                                        {/* <h4 className='service-title'>
                        Marketing Website
                      </h4> */}
                                        <p className='service-description'>
                                            With over a decade of experience, 1MW has become a leader in the marketing and sale of real estate. That’s not a brag, it’s a promise: to deliver tomorrow’s creative solutions — today.<br /><br />
                                            NONMLS.com is a single entry no-code content hub to deliver, personalize and recommend real estate to consumers – across multiple channels. It's a platform that combines predictive analytics, reporting, data analytics, and data integration capabilities.
                                        </p>
                                        {/* </div> */}
                                    </Col>
                                    {/* <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col> */}
                                </Row>

                            </div>
                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                                    <h2 className='service-heading border-bottom w-100'>
                                        Visionary Experts
                                    </h2>
                                    {/* <Link href="/" className='viewall-link'>
                      View all
                  </Link> */}
                                </div>
                                <Row>
                                    <Col md={10} lg={8} sm={12}>
                                        {/* <div className='service-outer'> */}
                                        {/* <h4 className='service-title'>
                        Marketing Website
                      </h4> */}
                                        <p className='service-description'>
                                            Your property lives through every touchpoint. Working collaboratively, we uncover and amplify your property’s unique value, while modifying misconceptions along the way.
                                        </p>
                                        {/* </div> */}
                                    </Col>
                                    {/* <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col> */}
                                </Row>

                            </div>
                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                                    <h2 className='service-heading border-bottom w-100'>
                                        Offering Opportunity and Value in All Market Conditions
                                    </h2>
                                    {/* <Link href="/" className='viewall-link'>
                      View all
                  </Link> */}
                                </div>
                                <Row>
                                    <Col md={10} lg={8} sm={12}>
                                        {/* <div className='service-outer'> */}
                                        {/* <h4 className='service-title'>
                        Marketing Website
                      </h4> */}
                                        <p className='service-description'>
                                            Today, 1MW has assisted 35+ of the largest and most sophisticated local, global, public and private lenders in the sale and valuation of real estate, with over 40,000 portfolio valuations and 200+ sales. Past and present clients include: Nationstar, Huntington, Bank of America, Goldman Sachs, Minnesota Housing, Citi, Beal Bank, US Bank, HUD, Carrington, J.P. Morgan Chase, M&T Bank, Compeer, USDA, PennyMac, Freddie Mac, CLMG, City National, Altisource and Thrivent Financial.
                                        </p>
                                        {/* </div> */}
                                    </Col>
                                    {/* <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col> */}
                                </Row>

                            </div>
                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                                    <h2 className='service-heading border-bottom w-100'>
                                        Mike Wilen
                                    </h2>
                                    {/* <Link href="/" className='viewall-link'>
                      View all
                  </Link> */}
                                </div>
                                <Row>
                                    <Col md={10} lg={8} sm={12}>
                                        {/* <div className='service-outer'> */}
                                        {/* <h4 className='service-title'>
                        Marketing Website
                      </h4> */}
                                        <p className='service-description'>
                                            600+ Properties Sold Representing Seller<br />
                                            14+ Awards<br />
                                            Coldwell Banker Global Luxury
                                        </p>
                                        {/* </div> */}
                                    </Col>
                                    {/* <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col> */}
                                </Row>

                            </div>
                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                                    <h2 className='service-heading border-bottom w-100'>
                                        Mentions
                                    </h2>
                                    {/* <Link href="/" className='viewall-link'>
                      View all
                  </Link> */}
                                </div>
                                <Row>
                                    <Col md={10} lg={8} sm={12}>
                                        {/* <div className='service-outer'> */}
                                        {/* <h4 className='service-title'>
                        Marketing Website
                      </h4> */}
                                        <p className='service-description'>
                                            <a href="https://www.fox9.com/news/look-inside-luxurious-rental-homes-for-the-super-bowl?">Fox News – Super Bowl Rental</a><br />
                                            <a href="https://www.bizjournals.com/twincities/news/2021/11/02/orono-wedding-chapel-on-sale-for-2-6-million.html">Minneapolis St. Paul Business Journal – Orono Listed at $2.6M</a><br />
                                            <a href="http://startribune.com/twin-cities-home-sales-continue-to-inch-lower-even-as-rates-fall/282507321/">Star Tribune – Minnesota Home Sales</a><br />
                                            <a href="http://sctimes.com/story/life/2021/08/14/big-lake-minnesota-real-estate-housing-mississippi-river-mansion-coldwell-banker-realty/5454075001/">USA Today – St. Cloud Times – Historic Victorian</a><br />
                                            <a href="https://www.startribune.com/historic-victorian-mansion-in-st-cloud-goes-on-market/600080718/#1">Star Tribune – Queen Anne Mansion</a><br />
                                        </p>
                                        {/* </div> */}
                                    </Col>
                                    {/* <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col> */}
                                </Row>

                            </div>
                            {/* <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                  <h2 className='service-heading'>
                    Our Services
                  </h2>
                  <Link href="/" className='viewall-link'>
                    View all services
                  </Link>
                </div>
                <Row>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing
                      </h4>
                      <p className='service-description'>
                        With over a decade of experience, 1MW has become a leader in the marketing and sale of real estate. That’s not a brag, it’s a promise: to deliver tomorrow’s creative solutions — today.
                        NONMLS.com is a single entry no-code content hub to deliver, personalize and recommend real estate to consumers – across multiple channels. It's a platform that combines predictive analytics, reporting, data analytics, and data integration capabilities.
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Visionary Experts(Curious Problem Solvers)
                      </h4>
                      <p className='service-description'>
                        Your property lives through every touchpoint. Working collaboratively, we uncover and amplify your property’s unique value, while modifying misconceptions along the way.
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Offering Opportunity and Value in All Market Conditions.
                      </h4>
                      <p className='service-description'>
                        Today, 1MW has assisted 35+ of the largest and most sophisticated local, global, public and private lenders in the sale and valuation of real estate, with over 40,000 portfolio valuations and 200+ sales. Past and present clients include: Nationstar, Huntington, Bank of America, Goldman Sachs, Minnesota Housing, Citi, Beal Bank, US Bank, HUD, Carrington, J.P. Morgan Chase, M&T Bank, Compeer, USDA, PennyMac, Freddie Mac, CLMG, City National, Altisource and Thrivent Financial.
                      </p>
                    </div>
                  </Col>
                </Row>

              </div> */}
                            {/* <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                  <h2 className='service-heading'>
                    Development services
                  </h2>
                  <Link href="/" className='viewall-link'>
                      View all development services
                  </Link>
                </div>
                <Row>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                      </p>
                    </div>
                  </Col>
                </Row>

              </div> */}

                            {/* <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline'>
                  <h2 className='service-heading'>
                    Clients
                  </h2>
                  <Link href="/" className='viewall-link'>
                  
                      View all
                   
                  </Link>
                </div>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/zego.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/sendinblue.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/loop.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/exakt-health.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/vilobici.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/heavybit.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/blotout.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/lak-gallery.svg' />
                    </div>
                  </Col>
                </Row>

              </div> */}

                            <div className='service-section mt-5'>
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <h2 className='service-heading'>
                                        Testimonials
                                    </h2>
                                    <Link href="/" className='viewall-link'>

                                        View all

                                    </Link>
                                </div>
                                <Row>
                                    <Col md={6} lg={6} sm={12} className="mt-3">
                                        <div className='testimonial'>
                                            <p className='testimonial-text'>
                                                “Next level! Working with 1MW took all the stress from selling our home.
                                                I can’t speak highly enough of the service.” – A Satisfied Client
                                            </p>
                                        </div>
                                    </Col>
                                    {/* <Col md={6} lg={6} sm={6} className="mt-3">
                    <div className='testimonial'>
                      <p className='testimonial-text'>
                        “Next level! Working with 1MW took all the stress from selling our home.
                        I can’t speak highly enough of the service.” – A Satisfied Client
                      </p>
                    </div>
                  </Col> */}

                                </Row>

                            </div>


                            {/* <div className='my-4'>
                <h1 className='my-2'>Check In</h1>
                <p className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg> Fox News – Super Bowl Rental</p>
                <p className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg> Minneapolis St. Paul Business Journal – Orono Listed at $2.6M</p>        <p className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg> Star Tribune – Minnesota Home Sales</p>        <p className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg> USA Today – St. Cloud Times – Historic Victorian</p>        <p className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg> Star Tribune – Queen Anne Mansion</p>
              </div>

              <div className='my-4 row'>
                <h3 className='my-3'>Contact Me</h3>
                <div className='col-md-6 px-4'>
                  <h5> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill mx-2" viewBox="0 0 16 16" >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>Mike Wilen</h5>
                  <p> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-reception-4 mx-2" viewBox="0 0 16 16">
                    <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                  </svg>600+ Properties Sold Representing Seller</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-award mx-2" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>14+ Awards</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bank mx-2" viewBox="0 0 16 16">
                    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                  </svg>Coldwell Banker Global Luxury</p>
                </div>
                <div className='col-md-6 px-4'>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope mx-2" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>Info@1MW.com</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telephone mx-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg> 612-400-9000</p>
                </div>

              </div> */}
                        </div>
                    </Container>
                </section>
            </main>
        </div>
    )
}