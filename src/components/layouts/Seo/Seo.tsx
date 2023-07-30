import React from "react";
import { PropsType } from "../../../types/common";
import { Helmet } from "react-helmet";
import "./../../../styles/common.scss";
import { ScrollProvider } from "../../ScrollIdentifier/ScrillIdentifier";

function Seo({ children }: PropsType) {
  return (
    <ScrollProvider>
      <div className="page-container">
        <Helmet title="Shaju PD - MERN stack developer" defer={false}>
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

          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>MERN Stack Development Services | Shaju PD</title>
          <meta
            name="description"
            content="We offer MERN stack development services to create static websites and custom web applications tailored to your business needs."
          />
          <meta
            name="keywords"
            content="MERN stack, web development, static websites, custom web applications, business solutions"
          />
          <meta name="author" content="Shaju PD" />
          <link rel="canonical" href="https://codewithshaju.com" />
          <meta
            property="og:title"
            content="MERN Stack Development Services | Shaju PD"
          />
          <meta
            property="og:description"
            content="MERN stack development services to create static websites and custom web applications tailored to your business needs."
          />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/hxburx5mi/Portfolio_assets/Capture.PNG?updatedAt=1690691491823"
          />
        </Helmet>
        {children}
      </div>
    </ScrollProvider>
  );
}

export default Seo;
