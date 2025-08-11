import Link from "next/link";

const HeroBannerComponent = () => {
  return (
    <div className="hero-banner">
        <div className="container">
            <div className="content">
            <Link href="#" className="tag">
                <span>Pay Smart. Pay Fast</span>
            </Link>
            <h1 className="heading">End-to-End Payout & Payroll <br/>Solutions for Digital Era.</h1>
            <p className="para">Optimize transactions and payouts with our secure, <br/>efficient payment gateway solution, ensuring smooth <br/>operations.</p>
            <div className="btn-wrap">
                <Link href="#" className="btn arrow btn-outline" onMouseOver={() => buttonHover.play()}>
                <span>Reach Out</span>
                </Link>
                <Link href="#" className="btn arrow btn-primary" onMouseOver={() => buttonHover.play()}>
                <span>Get Started</span>
                </Link>
            </div>
        </div>
        <div className="img-wrap">
            <picture>
            <source media="(min-width:993px)" srcSet="assets/images/robot.png" />
            <source media="(max-width:991px)" srcSet="assets/images/robot.png" />
            <img src="assets/images/robot.png" alt="Robot" width="838" height="630"/>
            </picture>
        </div>
        </div>
    </div>
  );
};

export default HeroBannerComponent;
