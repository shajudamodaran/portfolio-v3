import React from "react";
import { PropsType } from "../../../types/common";
import { Helmet } from "react-helmet";
import "./../../../styles/common.scss";
import { ScrollProvider } from "../../ScrollIdentifier/ScrillIdentifier";

function Seo({ children }: PropsType) {
  return (
    <ScrollProvider>
      <div className="page-container">
        <Helmet title="foo bar" defer={false}>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </div>
    </ScrollProvider>
  );
}

export default Seo;
