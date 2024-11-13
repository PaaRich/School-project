import studentImg from "../../assets/studentsimg_0.jpg";

const LandingPageStu = () => {
  return (
    <div>
      <img src={studentImg} alt="img" />
      <div className="leading-tight text-xl mt-4">
        {" "}
        <p>
          There can be no school without students. That is why KNUST cherishes
          her students. Our students are groomed to aspire higher to achieve
          their individual and collective dreams. As future leaders of their
          nation, KNUST feels proud to have her students as the soul of the
          University’s fraternity.
        </p>
        <br />
        <p>
          Acknowledging the importance of all kinds of persons aspiring to
          attain academic excellence, develop individual talents and skills, we
          care for the biggest majority of stakeholders in the University
          community who form the heartbeat of KNUST. There are vibrant student
          bodies and associations with students running their own affairs in a
          unified front to achieve their goals, facilitate negotiations and to
          represent the voice of colleague students. Know more about our
          wonderful students studying here in the nation’s best university.
        </p>
      </div>
    </div>
  );
};

export default LandingPageStu;
