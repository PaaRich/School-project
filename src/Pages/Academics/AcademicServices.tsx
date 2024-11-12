import img from "../../assets/Academics-services-banner.jpg";
const AcademicServices = () => {
  return (
    <div className="max-w-[90%]">
      <img src={img} alt="img" />
      <div className="py-4 text-xl leading-tight">
        <p>
          There are several programmes offered in KNUST in fields of Arts,
          Science, Technology and Business among a host of others. We
          periodically update these programmes and add new ones to meet your
          educational requirements and needs.
        </p>
        <br />{" "}
        <p>
          Our undergraduate and postgraduate courses are carefully tailored
          academically to make your studies convenient and successful. Dream
          big, make them a reality by offering one of our courses.
        </p>
      </div>
    </div>
  );
};

export default AcademicServices;
