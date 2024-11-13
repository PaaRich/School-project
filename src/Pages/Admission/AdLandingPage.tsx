import admissionImg from "../../assets/admissionsimg_0.jpg";
const AdLandingPage = () => {
  return (
    <div>
      <img src={admissionImg} alt="alt" />
      <div className="text-lg leading-tight mt-2">
        <p>
          KNUST is the first choice of countless prospective students seeking
          quality education and hoping to further their studies or making
          themselves more marketable whilst developing their academic potential.
          As a result, the university receives numerous applications each
          academic year from prospective students.
        </p>
        <br />
        <p>
          We update you on general and specific admission information ranging
          from undergraduate studies through postgraduate studies to distance
          learning. We are keen on facilitating your application and admission
          process to enable you study with us. In line with this, we have made
          the application process fast, more reliable and convenient through our
          online admission system. Our timely correspondence and the information
          we share periodically on admission issues serve as a guide to aid you.
          Join us, let's learn together, come, share your culture.
        </p>
        <button className="bg-red-800 rounded-md py-1 px-8 text-white outline-0 mt-4">
          APPLY TO KNUST
        </button>
      </div>
    </div>
  );
};

export default AdLandingPage;
