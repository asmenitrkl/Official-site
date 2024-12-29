import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";

const Team = () => {
  const data = [
    {
      id: "id2024",
      title: "2024",
      teams: [
        {
          title: "Executive",
          id: "Team1",
          members: [
            {
              name: "Samidha",
              role: "Chairperson",
              img: "https://i.postimg.cc/tTxd4MJn/SAMIDHA.jpg",
              special: true,
            },
            {
              name: "Ayush Gupta",
              role: "Vice Chairperson",
              img: "https://i.postimg.cc/wT8nmVMh/IMG-2719.jpg",
              special: true,
            },
            {
              name: "Sanjeebani Tosh",
              role: "Secretary",
              img: "",
              special: true,
            },
            {
              name: "Udita Mishra",
              role: "Treasurer",
              special: true,
              img: "https://i.postimg.cc/qvfzFRvd/udita.jpg",
            },
          ],
        },
        {
          title: "Bluestreak",
          id: "Team2",
          members: [
            {
              name: "Suvendu Ghadai",
              role: "Captain",
              img: "https://i.postimg.cc/ydCm7v7N/IMG-20231210-130933-1.jpg",
              special: true,
            },
            {
              name: "Hemant Rout",
              role: "Vice- Captain",
              img: "https://i.postimg.cc/J7vnynJB/hemant.png",
              special: true,
            },
            {
              name: "Pranay Sharma",
              role: "Manager",
              img: "https://i.postimg.cc/VL3x9FpF/Pranay.jpg",
              special: true,
            },
            {
              name: "Rahul Kumar Baral",
              role: "Chassis subsystem lead",
              img: "",
              special: true,
            },
            {
              name: "Amit Kumar Sahoo",
              role: "Vehicle dynamics lead",
              img: "https://i.postimg.cc/ZqmX25TB/Amit.jpg",
              special: true,
            },
            {
              name: "Krishnan Venkatnarayanan",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "DEBASHISH SAHU",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "BIBHUTI PALEI",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "SRIJONI GHOSH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "NIBEDITA TRIPATHY",
              role: "Student Member",
              img: "https://i.postimg.cc/8s8NZZVg/Nibedita-Tripathy.jpg",
              special: false,
            },
            {
              name: "OM PRAKASH DALBEHERA",
              role: "Student Member",
              img: "https://i.postimg.cc/7h3DpPm6/OM-PRAKASH-DALBEHERA.jpg",
              special: false,
            },
            {
              name: "Shaswat Padhan",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/x1TY42Hf/Ayush-Sahu.jpg",
              special: false,
            },
            {
              name: "kunal sharma",
              role: "Student Member",
              img: "https://i.postimg.cc/Wpg2DSTv/kunal-sharma.jpg",
              special: false,
            },
            {
              name: "SRI CHINMAYANANDA",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Pradyumna Mohapatra",
              role: "Student Member",
              img: "https://i.postimg.cc/KYQcm7tt/IMG-20231224-191023.jpg",
              special: false,
            },
            {
              name: "M Sai Krishna",
              role: "Student Member",
              img: "",
              special: false,
            },
          ],
        },
        {
          title: "Bluebird",
          id: "Team3",
          members: [
            {
              name: "Prayash Kumar Behera",
              role: "Captain",
              img: "https://i.postimg.cc/XYBMhcxJ/PRAYASH-KUMAR-BEHERA.jpg",
              special: true,
            },
            {
              name: "Ashish Kumar Sahu",
              role: "Vice- Captain",
              img: "https://i.postimg.cc/1Xn3Chxt/ASHISH-KUMAR-SAHU.jpg",
              special: true,
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/cLQrGSvt/Ayush-Sahu.jpg",
              special: false,
            },
            {
              name: "PRIYANSHU SINGH",
              role: "Student Member",
              img: "https://i.postimg.cc/15V8M6PH/PRIYANSHU-SINGH.jpg",
              special: false,
            },
            {
              name: "Shakti prasad patra",
              role: "Student Member",
              img: "https://i.postimg.cc/PqTNtRD3/Shakti-Prasad-patra.jpg",
              special: false,
            },
          ],
        },
        {
          title: "BluePrint",
          id: "Team4",
          members: [
            {
              name: "Ayan Kumar Rajak",
              role: "Captain",
              img: "",
              special: true,
            },
            {
              name: "Ayush Kumar Nayak",
              role: "Vice-Captain",
              img: "https://i.postimg.cc/FRr5ds85/IMG20230403130618-1.jpg",
              special: true,
            },
            {
              name: "Sriharsha Mishra",
              role: "Aerodynamics Subsystem Lead",
              img: "https://i.postimg.cc/tCwjSbZW/SRIHARSHA-MISHRA.jpg",
              special: true,
            },
            {
              name: "Biswaranjan Guru",
              role: "Electronics lead and Manager",
              img: "",
              special: true,
            },
            {
              name: "Saumyadeep Sau",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "PRIYANSHU SINGH",
              role: "Student Member",
              img: "https://i.postimg.cc/1tZxxkNX/PRIYANSHU-SINGH.jpg",
              special: false,
            },
            {
              name: "Pratyush Kumar Mohapatra",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Shakti prasad patra",
              role: "Student Member",
              img: "https://i.postimg.cc/tR5KfmRR/Shakti-Prasad-patra.jpg",
              special: false,
            },
            {
              name: "Pradyumna Mohapatra",
              role: "Student Member",
              img: "https://i.postimg.cc/j2ZB7C3n/IMG-20230829-164130.jpg",
              special: false,
            },
          ],
        },
        {
          title: "Creative",
          id: "Team5",
          members: [
            {
              name: "Archana Moharana",
              role: "Creative Head",
              img: "https://i.postimg.cc/yYkKyxd7/A.jpg",
              special: true,
            },
            {
              name: "Debasish Rana",
              role: "Web Dev Head",
              img: "https://i.postimg.cc/wxP9yxvp/IMG20230114163238.jpg",
              special: true,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "Shaswat Padhan",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "pritidipan Khatua",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "SRI CHINMAYA NANDA",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Shaswat Padhan",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "pritidipan Khatua",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "Anurag Shaw",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "shweta raj",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Pravanjan Pradhan",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "Jangam Anuhya",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "Saumyadeep Sau",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
              special: false,
            },
          ],
        },
      ],
    },
  ];

  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  const [toggled, setToggled] = useState(data[0].id);
  const [maintoggled, mainsetToggled] = useState(data[0].teams[0].id);

  const [clicked, setClicked] = useState(true);
  const [mainclicked, mainsetClicked] = useState(true);

  const handleClick = (id) => {
    setClicked(!clicked);
    setToggled(id);
  };

  const mainhandleClick = (id) => {
    mainsetClicked(!mainclicked);
    mainsetToggled(id);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout isScrolled={isScrolled}>
          <div className="team-main">
            <h1>OUR MEMBERS</h1>
            <p>2024</p>
            <div className="team-info">
              <div className="team-info-content">
                <div className="team-wrapper">
                  {data.map(({ id, teams }) => (
                    <>
                      {toggled === id ? (
                        <>
                          {teams.map(({ title, id }) => (
                            <div
                              key={id}
                              className={`team-btn ${
                                maintoggled === id ? "mainclicked" : ""
                              }`}
                              onClick={() => mainhandleClick(id)}
                            >
                              {title}
                            </div>
                          ))}
                        </>
                      ) : null}
                    </>
                  ))}
                </div>

                {data.map(({ id, teams }) => (
                  <>
                    {toggled === id ? (
                      <div className="dummyclass">
                        {teams.map(({ id, members }) => (
                          <>
                            {maintoggled === id ? (
                              <div className="team-rows team-flow">
                                {members.map(({ name, role, img, special }) => (
                                  <div className="team-row">
                                    <div className="team-col">
                                      <div
                                        className={`${
                                          special
                                            ? "special-member-card"
                                            : "team-card"
                                        }`}
                                      >
                                        <div className="teamContent-img">
                                          <img src={img} alt="team-img" />
                                        </div>

                                        <h3>{name}</h3>
                                        <p>{role}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </>
                        ))}
                      </div>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Team;
