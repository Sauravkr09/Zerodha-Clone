import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div
        className="container border-top mt-5"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <div
          className="row mt-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            className="col mt-5"
            style={{
              flex: "1 1 calc(25% - 20px)",
              margin: "10px 10px",
              minWidth: "200px",
            }}
          >
            <img
              src="media/images/logo.svg"
              style={{ width: "50%", maxWidth: "100%", height: "auto" }}
            />
            <br />
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              &copy; 2010 - 2024, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>
          <div
            className="col"
            style={{
              flex: "1 1 calc(25% - 20px)",
              margin: "10px 10px",
              minWidth: "200px",
            }}
          >
            <p>Company</p>
            <a href="" style={{ textDecoration: "none" }}>
              About
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Products
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Pricing
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Referral programme
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Careers
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Press & media
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div
            className="col"
            style={{
              flex: "1 1 calc(25% - 20px)",
              margin: "10px 10px",
              minWidth: "200px",
            }}
          >
            <p>Support</p>
            <a href="" style={{ textDecoration: "none" }}>
              Contact us
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Support portal
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              List of charges
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Downloads & resources
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Videos
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              How to file a complaint?
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Status of your complaints
            </a>
            <br />
          </div>
          <div
            className="col"
            style={{
              flex: "1 1 calc(25% - 20px)",
              margin: "10px 10px",
              minWidth: "200px",
            }}
          >
            <p>Account</p>
            <a href="" style={{ textDecoration: "none" }}>
              Open an account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Fund transfer
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div
          className="mt-5 text-small text-muted"
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            textAlign: "justify",
            color: "gray", // Added color for paragraphs
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              complaints@zerodha.com,
            </a>{" "}
            for DP related to{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the
            grievances
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>
          <br />
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
