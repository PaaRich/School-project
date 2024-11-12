import img from "../../assets/academicsbanner.jpg";

const LandingPage = () => {
  return (
    <div>
      <img src={img} alt="img" />
      <div className="text-xl leading-tight border-b-2 pb-5">
        <div className="my-4 pl-4 border-l-[6px]">
          <p>
            Proudly Ghana's No. 1 University and seeking to maintain academic
            excellence; – one of our hallmarks. KNUST offers and continually
            upgrades her Undergraduate, Postgraduate and distance learning
            courses.
          </p>
        </div>
        <p>
          With carefully categorized academic departments into six colleges, a
          state of the art library complex housing a modern Information and
          Communication Technology Centre, several educational resource centres,
          modern laboratories, research facilities and a host of other
          facilities, KNUST delivers a high standard of education which reflects
          the pedigree of a University poised on attaining a status of being No.
          1 in Africa. Academic related issues especially on studying and
          research has never been this convenient. This hallmark is evident in
          our ever increasing affiliate institutions. We are the home of
          academic excellence.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
