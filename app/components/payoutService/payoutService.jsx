import Link from "next/link";

const PayoutService = () => {
  return (
    <div className="payout-service">
        <div className="container">
            <div className="content">
              <Link href="#" className="tag">
                <span>Payout Service Centric</span>
              </Link>
              <h2 className="main-heading">Streamlined for Payout Ease and Efficiency</h2>
              <div className="stepers">
                <ul>
                  <li className="list-item active">
                    <Link href="javascript:void(0);">
                      <h3 className="heading">Comprehensive Documentation</h3>
                      <p className="para">Access clear, detailed documentation that simplifies integration and accelerates your payout setup.</p>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link href="javascript:void(0);">
                      <h3 className="heading">Quick Start SDKs</h3>
                      <p className="para">Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.</p>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link href="javascript:void(0);">
                      <h3 className="heading">Sandbox Environment</h3>
                      <p className="para">Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn-wrap">
                <Link href="#" className="btn arrow btn-primary" onMouseOver={() => buttonHover.play()}>
                  <span>Get Started</span>
                </Link>
              </div>
          </div>
          <div className="img-wrap">
            <picture>
              <source media="(min-width:993px)" srcSet="assets/images/payout_services.png"/>
              <source media="(max-width:991px)" srcSet="assets/images/payout_services.png"/>
              <img src="assets/images/payout_services.png" alt="Robot" width="610" height="645"/>
            </picture>
          </div>
        </div>
    </div>
  );
};

export default PayoutService;
