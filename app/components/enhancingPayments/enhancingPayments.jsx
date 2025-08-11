"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EnhancingPayments = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <div className="enhancing-payments">
      <div className="container">
        <h3 className="sub-heading">Enhancing payments</h3>
        <h2 className="main-heading">
          Powering Payments Across <br /> Industries
        </h2>

        <div className="tab-container">
          <div className="tabs">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="icon">
                  <Image src={tab.icon} alt={tab.label} width={32} height={32} />
                </span>
                <span className="text">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tab-content">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
                id={tab.id}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const tabsData = [
    {
      id: "payments",
      label: "Payments",
      icon: "/assets/images/payments.png",
      content: (
        <div className="content-wrap">
          <div className="content">
            <h2>
              Elevate Your Online Store's <br /> Payment Experience
            </h2>
            <p>
              Our payment gateway simplifies transactions for e-commerce
              businesses, delivering fast and secure processing. With smooth
              integration, we enhance your store's payment capabilities.
              Optimize your checkout process and boost customer satisfaction
              easily.
            </p>
            <ul>
              <li>
                <span className="icon">
                  <Image
                    src="/assets/images/optimize_checkout.png"
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="text">Optimize Your Checkout</span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/assets/images/fast_secure.png"
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="text">Fast and Secure</span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/assets/images/smooth_integration.png"
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="text">Smooth Integration</span>
              </li>
            </ul>
            <div className="btn-wrap">
              <Link
                href="#"
                className="btn arrow btn-primary"
                onMouseOver={() => console.log("Hover sound here")}
              >
                <span>Get Started</span>
              </Link>
            </div>
          </div>
          <div className="img-wrap">
            <Image
              src="/assets/images/tab_content_01.png"
              alt="tab content img"
              width={590}
              height={340}
            />
          </div>
        </div>
      ),
    },
    {
      id: "payout",
      label: "Payout",
      icon: "/assets/images/payout.png",
      content: <h2>Payout Management</h2>,
    },
    {
      id: "payroll",
      label: "Payroll",
      icon: "/assets/images/payroll.png",
      content: <h2>Payroll Automation</h2>,
    },
    {
      id: "ai-banking",
      label: "AI Banking",
      icon: "/assets/images/al_banking.png",
      content: <h2>AI Banking</h2>,
    },
  ];

  return <EnhancingPayments tabsData={tabsData} />;
}
