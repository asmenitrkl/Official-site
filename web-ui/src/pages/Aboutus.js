import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import "../style/aboutus.css";

const Aboutus = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout title={"ASME-NITRKL Aboutus"} isScrolled={isScrolled}>
            <div className="bgHeading">
              <img
                className="bgImage"
                src="https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <h1>ABOUT US</h1>
            </div>

            <div className="bg">
              <div className="aboutUsContent">
                <p>
                ASME (American Society of Mechanical Engineers) NIT Rourkela Student Section is an enthusiastic community of 55+ members, with our mission to empower engineers for success in the fast-paced growing industry through comprehensive professional and personal development opportunities like ASME E-Fests. ASME NIT Rourkela offers a wide range of valuable resources tailored to support our members on their engineering journey. We organize and contest in exciting competitions, provide workshop programs and deliver technical skills training to enhance our members' capabilities. At ASME NIT Rourkela, our primary goal is to provide members with valuable industry experience by facilitating professional connections and collaborations with a diverse range of sponsoring companies. Through engaging workshops and partnership tech events, we connect our members with industrial opportunities, bridging the gap between academia and industry. We would also like to honour our section's faculty advisor Dr. Suman Ghosh for fostering an interactive culture within the community. As our organization has a rich legacy since 2014 on campus, ASME NIT Rourkela is dedicated to transforming students from all walks of life into exceptional engineers, fostering individual innovation and collaboration. Join us as we shape the future of engineering at NIT Rourkela and beyond.
                </p>
              </div>
              {/* <div className="right_content">
                <h4 className="h4_left">
                  Passion in the new Human powered vehicle
                </h4>
                <h4 className="h4_right">High-Quality design craft</h4>
              </div> */}
            </div>
            <div className="lowerContent">
              <h1>Message from Facad</h1>
              <div className="messageRow">
                <div className="facadContent">
                  As a faculty advisor, I have been privileged to oversee the
                  growth of ASME Club since 20XX, which are dynamic, innovative,
                  and versatile. Our club has attracted members who share a deep
                  passion for Human Powered Vehicles. As we continue to evolve,
                  I invite all individuals to contribute in any way possible.
                  towards the success and development of ASME Club.
                </div>
                <div className="facadImg">
                  <img src="https://media.istockphoto.com/id/610021016/photo/young-professor.jpg?s=1024x1024&w=is&k=20&c=31wIaMAYYLkD8lKo-CbTWkcn-c7zVKePwT8WZ4dtF4o=" />
                  <h3>Dr. Suman Gosh </h3>
                  <h4>Assistant Professor | Dept. of Mechanical Engineering</h4>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Aboutus;
