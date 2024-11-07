import knustOldPic from "../../assets/knustOldPic.jpg";
import historyTimeline from "../../assets/historytimeline.png";

const History = () => {
  return (
    <div className="text-xl w-[85%]">
      <div>
        <img src={knustOldPic} alt="img" />
        <p>
          The University of Science and Technology succeeded the Kumasi College
          of Technology which was established by a Government Ordinance on 6th
          October, 1951. It was however, opened officially on 22nd January, 1952
          with 200 Teacher Training students transferred from Achimota, to form
          the nucleus of the new College.
        </p>
      </div>
      <div className="pt-4 ">
        {/* item */}
        <div className="flex items-start py-2">
          <div className="basis-1/5">
            <img className=" mx-auto" src={historyTimeline} alt="img" />
          </div>
          <div className="basis-4/5">
            <h3 className="text-xl font-bold text-slate-600">
              October, 1952, School of Engineering and the Department of
              Commerce established
            </h3>
            <p>
              In October, 1952, the School of Engineering and the Department of
              Commerce were established and the first students were admitted.
              From 1952 to 1955, the School of Engineering prepared students for
              professional qualifications only. In 1955, the School embarked on
              courses leading to the University of London Bachelor of
              Engineering External Degree Examinations.
            </p>
          </div>
        </div>
        {/* item */}
        <div className="flex items-start py-2">
          <div className="basis-1/5">
            <img className=" mx-auto" src={historyTimeline} alt="img" />
          </div>
          <div className="basis-4/5">
            <h3 className="text-xl font-bold text-slate-600">
              January, 1953 Pharmacy Department established
            </h3>
            <p>
              A Pharmacy Department was established in January, 1953, with the
              transfer of the former School of Pharmacy from Korle-Bu Hospital,
              Accra, to the College. The Department ran a two-year comprehensive
              course in Pharmacy leading to the award of the Pharmacy Board
              Certificate.
            </p>
          </div>
        </div>
        {/* item */}
        <div className="flex items-start py-2">
          <div className="basis-1/5">
            <img className=" mx-auto" src={historyTimeline} alt="img" />
          </div>
          <div className="basis-4/5">
            <h3 className="text-xl font-bold text-slate-600">
              1953 Department of Agriculture opened
            </h3>
            <p>
              A Department of Agriculture was opened in the same year to provide
              a number of ad hoc courses of varying duration, from a few terms
              to three years, for the Ministry of Agriculture. A Department of
              General Studies was also instituted to prepare students for the
              Higher School Certificate Examinations in both Science and Arts
              subjects and to give instruction in such subjects as were
              requested by the other departments.
            </p>
          </div>
        </div>
        {/* item */}
        <div className="flex items-start py-2">
          <div className="basis-1/5">
            <img className=" mx-auto" src={historyTimeline} alt="img" />
          </div>
          <div className="basis-4/5">
            <h3 className="text-xl font-bold text-slate-600">
              1957 inauguration of School of Architecture, Town Planning and
              Building
            </h3>
            <p>
              Once established, the College began to grow and in 1957, the
              School of Architecture, Town Planning and Building was inaugurated
              and its first students were admitted in January, 1958, for
              professional courses in Architecture, Town Planning and Building.
              As the College expanded, it was decided to make the Kumasi College
              of Technology a purely science and technology institution. In
              pursuit of this policy, the Teacher Training College, with the
              exception of the Art School, was transferred in January, 1958, to
              the Winneba Training College, and in 1959 the Commerce Department
              was transferred to Achimota to form the nucleus of the present
              School of administration of the University of Ghana, Legon.
              Accession to University Status – The birth of KNUST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
