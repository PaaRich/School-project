import img from "../../assets/university_building.jpg";

const AboutLandingPage = () => {
  return (
    <div>
      <div className="h-[30%]">
        <img src={img} alt="img" className=" h-full object-contain" />
      </div>
      <div className="text-xl py-4">
        <p>
          The KNUST has, since January 2005, transformed from its previous
          centralized system of administration into significantly decentralized
          one called the Collegiate system. Under this system, the various
          faculties have been condensed into six colleges. Since its inception,
          the University has been administered on the Faculty-based system.
        </p>
        <br />
        <p>
          This naturally led to a situation where new Faculties and Institutes
          were created to meet the ever-growing academic pursuits of students.
          The resultant collection of Faculties largely hampered efficient
          administrative and academic operations, as duplication of efforts and
          long administrative processes were rampant. The need to deal with
          these complexities and harmonize the operation of the existing
          structures became apparent and unavoidable. This was more so, with the
          ever-increasing numbers in student population. True to the vision to
          make KNUST the model for technological education in Africa and the
          Vice-Chancellor's commitment to academic excellence, the Collegiate
          System came into being with the promulgation of the statutes on
          November 29, 2004.
        </p>
        <br />
        <h2 className="text-3xl">Get Information</h2>
        <p>
          The University is situated approximately on a sixteen square-kilometre
          campus of undulating land and pleasant surroundings, about seven
          kilometres away from the central business district of the city of
          Kumasi. The campus presents a panorama of beautiful and modern
          buildings interspersed with verdant lawns and tropical flora, which
          provide a cool and refreshing atmosphere congenial to academic
          studies. It has within the short period of its existence become an
          important centre for the training of scientists and technologists not
          only for Ghana, but also for other African countries as well as from
          other parts of the world.
        </p>
        <br />
        <p>
          There are six Halls of residence and a number of hostels in the
          University. They are Queen Elizabeth II, Unity, Independence,
          Republic, University, and Africa. Three of the Halls of residence are
          mixed, two for males only and one for females only. Of the five
          hostels, two are for postgraduate students, one for both undergraduate
          and graduate students and managed by the Ghana Universities Staff
          Superannuation Scheme (GUSSS).
        </p>
        <br />
        <p>
          Medical students of Komfo Anokye Teaching Hospital inhabit one of the
          hostels, while the last one is under the management of the Social
          Security and National Insurance Trust (SSNIT).The Halls are
          self-contained, each with its kitchen, dining hall and separate junior
          and senior common rooms for students and senior members of the hall.
          The Halls of Residence, the Administration Block, the Library and the
          Great Hall occupy the central portion of the grounds.
        </p>
        <br />
        <p>
          The University started awarding its degrees in June 1964. All degree
          examinations are reviewed by external examiners and moderators to
          ensure that high academic standards are maintained
        </p>
      </div>
    </div>
  );
};

export default AboutLandingPage;
