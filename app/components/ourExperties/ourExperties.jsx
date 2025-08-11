import Link from "next/link";

const OurExperties = () => {
  return (
    <div className="our-experties">
        <div className="container">
        <h3 className="sub-heading">Our Experties</h3>
        <h2 className="main-heading">Redefining Payment <br/>Processing for You</h2>
        <div className="swiper slider-ourexperties">
            <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="card">
                <div className="card-content">
                    <div className="img-wrap">
                    <img src="assets/images/upi_autopay.png" alt="UPI Autopay" width="185" height="200"/>
                    </div>
                    <h2>UPI Autopay</h2>
                    <p>Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.</p>
                    <Link href="#" className="btn-right">
                    <img src="assets/images/arrow_right.svg" alt="icon" />
                    </Link>
                </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                <div className="card-content">
                    <div className="img-wrap">
                    <img src="assets/images/api_banking.png" alt="API Banking" width="185" height="200"/>
                    </div>
                    <h2>API Banking</h2>
                    <p>Integrate financial services seamlessly into your applications with our robust API banking solutions.</p>
                    <Link href="#" className="btn-right">
                    <img src="assets/images/arrow_right.svg" alt="icon" />
                    </Link>
                </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                <div className="card-content">
                    <div className="img-wrap">
                    <img src="assets/images/payouts.png" alt="Payouts" width="185" height="200"/>
                    </div>
                    <h2>Payouts</h2>
                    <p>Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.</p>
                    <Link href="#" className="btn-right">
                    <img src="assets/images/arrow_right.svg" alt="icon" />
                    </Link>
                </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                <div className="card-content">
                    <div className="img-wrap">
                    <img src="assets/images/bulk_payments.png" alt="Bulk Payment" width="185" height="200"/>
                    </div>
                    <h2>Bulk Payments</h2>
                    <p>Process multiple payments at once, saving time and reducing errors with bulk payment options.</p>
                    <Link href="#" className="btn-right">
                    <img src="assets/images/arrow_right.svg" alt="icon" />
                    </Link>
                </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                <div className="card-content">
                    <div className="img-wrap">
                    <img src="assets/images/api_banking.png" alt="API Banking" width="185" height="200"/>
                    </div>
                    <h2>API Banking</h2>
                    <p>Integrate financial services seamlessly into your applications with our robust API banking solutions.</p>
                    <Link href="#" className="btn-right">
                    <img src="assets/images/arrow_right.svg" alt="icon" />
                    </Link>
                </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                <div className="card-content">
                    <div className="img-wrap">
                    <img src="assets/images/payouts.png" alt="Payouts" width="185" height="200"/>
                    </div>
                    <h2>Payouts</h2>
                    <p>Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.</p>
                    <Link href="#" className="btn-right">
                    <img src="assets/images/arrow_right.svg" alt="icon" />
                    </Link>
                </div>
                </div>
            </div>
            </div>
            <div className="swiper-btn-wrap">
            <div className="oe-slider-btn-next"></div>
            <div className="oe-slider-btn-prev"></div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default OurExperties;
