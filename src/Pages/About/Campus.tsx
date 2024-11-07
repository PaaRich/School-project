import campusImg from "../../assets/KNUST campus.jpg";

const Campus = () => {
  return (
    <div>
      <div>
        <img src={campusImg} alt="img" />
      </div>
      <div className="mt-4 text-xl">
        <p>
          The Kwame Nkrumah University of Science and Technology is a
          world-class academic centre of excellence, spearheading West Africa’s
          pursuit of technological advancement. Our campus is located at a very
          ideal place inside the city of Kumasi.
        </p>
        <br />
        <p>
          With an estimated eight-mile square of aesthetic beauty, a rising and
          falling landscape , state of the art buildings, a wide range of trees,
          long stretches of well-cut lawns and very conspicuous flora
          prettification, our community provides the right atmosphere for the
          holistic development of students.
        </p>
        <br />
        <p>
          There are over 100 student groups and organizations on campus,
          although that number keeps expanding because students are encouraged
          to start new clubs to fit their interests - and they don't hesitate to
          do so! All student groups are governed and managed by students, and
          there is literally something for everybody.
        </p>
      </div>
    </div>
  );
};

export default Campus;
