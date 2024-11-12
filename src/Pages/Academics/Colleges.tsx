import agricultureStudent from "../../assets/college-ofagricandnaturalresources-img.jpg";
import environmentStudent from "../../assets/college-ofartandbuiltenvironment-img.jpg";
import humanityStudent from "../../assets/college-ohumanitiesandsocialfsciences-img.jpg";
import engineerStudent from "../../assets/college-of-engineering-img.jpg";

const Colleges = () => {
  return (
    <div className="max-w-[90%] text-xl leading-tight">
      <div>
        <h2 className="underline font-semibold text-xl tracking-widest text-center">
          COLLEGES
        </h2>
        <p>
          As the number of students and academic programmes grow, the
          administrative structure with which the University was governed by
          correspondingly changed. The Colleges came into being in January 2005,
          following the promulgation of the revised University statutes in
          October 2004. The Colleges of the University operate a{" "}
          <span className="font-bold">
            3-Tier Academic/Administrative Structure.
          </span>
        </p>
        <br />
        <p>
          The Academic/Administrative 3-Tier System operates with the Offices of
          the Provosts of Colleges,Deans of Facultiesand Heads of Departments.
          KNUST is now fundamentally structured into six Colleges. These
          Colleges are composed of Faculties. These Faculties are subdivided
          into Departments. New and existing Departments and programmes fall
          under these Colleges. The Departments coordinate and collaborate where
          necessary. They are;
        </p>
        <div className="grid grid-cols-2 gap-y-4 mt-8">
          <img src={agricultureStudent} alt="students" />
          <img src={environmentStudent} alt="students" />
          <img src={humanityStudent} alt="students" />
          <img src={engineerStudent} alt="students" />
        </div>
      </div>
    </div>
  );
};

export default Colleges;
