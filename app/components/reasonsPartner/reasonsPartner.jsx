import Link from "next/link";

const ReasonsPartner = () => {
  return (
    <div className="reasons-partner">
        <picture className="bg">
        <source media="(min-width:993px)" srcSet="assets/images/reasons_background.png"/>
        <source media="(max-width:991px)" srcSet="assets/images/reasons_background.png"/>
        <img src="assets/images/reasons_background.png" alt="Robot" width="1000" height="1000"/>
        </picture>
        <div className="container">
        <h3 className="sub-heading">Reasons to Partner</h3>
        <h2 className="main-heading">Exceptional Support for Your Success</h2>
        <div className="img-wrap">
            <picture>
            <source media="(min-width:993px)" srcSet="assets/images/partner-layout.png"/>
            <source media="(max-width:991px)" srcSet="assets/images/partner-layout.png"/>
            <img src="assets/images/partner-layout.png" alt="Robot" width="1120" height="921"/>
            </picture>
        </div>
        </div>
    </div>
  );
};

export default ReasonsPartner;
