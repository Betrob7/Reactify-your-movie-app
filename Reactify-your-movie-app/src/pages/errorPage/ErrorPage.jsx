import "./errorPage.css"
import Header from "../../components/header/Header";
import Lottie from "lottie-react"
import errorAnimation from "../../assets/errorAnimation.json";

function ErrorPage() {
  return (
    <>
      <Header />
      <section className="error-page">
      <h1 className="error-page__title">Page not found!</h1>;
        <Lottie className="error-page__animation" animationData={errorAnimation} loop={true} />
      </section>
    </>

  )
}

export default ErrorPage;
