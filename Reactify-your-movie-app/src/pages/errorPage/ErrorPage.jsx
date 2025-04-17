import "./errorPage.css";
import Header from "../../components/header/Header";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/errorAnimation.json";
import Footer from "../../components/footer/Footer";
import HeadingOne from "../../components/HeadingOne";

function ErrorPage() {
  const headingClass = `error-page__title`;
  const title = `Page not found!`;
  return (
    <>
      <Header />
      <main className="error-page">
        <HeadingOne title={title} className={headingClass} />
        <Lottie className="error-page__animation" animationData={errorAnimation} loop={true} />
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
