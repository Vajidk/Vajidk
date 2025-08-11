import Link from "next/link";

const Footer = () => {
    return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <Link href="#" className="logo">
              <img src="assets/images/logo_UzOPay.svg" alt="Brand Logo" height="24" width="72"/>
            </Link>
            <p>Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities. Optimize your checkout process and boost customer satisfaction easily.</p>
              <ul className="social-media">
                <li>
                  <Link href="#">
                    <img src="assets/images/facebook.svg" alt="facebook" height="14" width="14"/>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="assets/images/x.svg" alt="Twiter" height="14" width="14"/>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="assets/images/insta.svg" alt="Instagram" height="14" width="14"/>
                  </Link>
                </li>
              </ul>
          </div>

          <div className="footer-links">
            <ul>
              <li className="fnav-list">
                <h3>Payment</h3>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Payment Gateway</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Payment Links</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Payment Methods</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Bulk Payment</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Invoice</Link>
              </li>
            </ul>

            <ul>
              <li className="fnav-list">
                <h3>AI Banking</h3>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Current Account</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Accounting</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">API Banking</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">UPI Autopay</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Tax Payment</Link>
              </li>
            </ul>

            <ul>
              <li className="fnav-list">
                <h3>Policies</h3>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Cards</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">CMS</Link>
              </li>
            </ul>

            <ul>
              <li className="fnav-list">
                <h3>Company</h3>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">About us</Link>
              </li>
              <li className="fnav-list">
                <Link href="#" className="fnav-link">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
            <div className="copy">&copy; 2025 UzOPay</div>
            <div className="fb-links">
                <Link href="#">Terms of Service</Link>
                <Link href="#">Privacy Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
