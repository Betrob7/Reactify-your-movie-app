import "./errorPage.css";
import Header from "../../components/header/Header";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/errorAnimation.json";
import Footer from "../../components/footer/Footer";
import HeadingOne from "../../components/HeadingOne";

function ErrorPage() {
  return (
    <>
      <Header />
      <main className="error-page" aria-label="404 error page - page not found">
        <HeadingOne title="Page not found!" className="error-page__title" />
        <Lottie className="error-page__animation" animationData={errorAnimation} loop={true} aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
