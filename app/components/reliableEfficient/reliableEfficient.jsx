import Link from "next/link";

const ReliableEfficient = () => {
  return (
    <div className="reliableEfficient">
        <div className="container">
        <span className="graph-line"></span>
        <span className="glow"></span>
        <div className="content">
            <Link href="#" className="tag">
            <span>Reliable, and Efficient</span>
            </Link>
            <h2 className="heading">Simplify the <br/>payments process</h2>
            <p className="para">Tools crafted to simplify and enhance your payout processes.</p>
        </div>
        <div className="img-wrap">
            <picture>
            <source media="(min-width:993px)" srcSet="assets/images/reliable_eeficiet.png"/>
            <source media="(max-width:991px)" srcSet="assets/images/reliable_eeficiet.png"/>
            <img src="assets/images/reliable_eeficiet.png" alt="Robot" width="564" height="324"/>
            </picture>
        </div>
        </div>
    </div>
  );
};

export default ReliableEfficient;
