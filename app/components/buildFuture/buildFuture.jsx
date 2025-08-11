import Link from "next/link";

const BuildFuture = () => {
  return (
    <div className="build-future">
        <div className="container">
        <div className="content">
            <h2 className="heading">
            Let's build the <br/>future of finance together
            </h2>
            <div className="btn-wrap">
            <Link href="#" className="btn arrow btn-primary" onMouseOver={() => buttonHover.play()}>

                <span>Get Started</span>
            </Link>
            </div>
        </div>
        </div>
    </div>
  );
};

export default BuildFuture;
