import React from "react";

const certifications = [
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjqz83Lx_iNAxWto2YCHbTBHXIYABABGgJzbQ&co=1&gclid=CjwKCAjwpMTCBhA-EiwA_-Msmeg3MY63mX4UbwUlpn9k2Ae5uUXku7CsmAHJHYjcI32zbukP3qOKOxoCyzQQAvD_BwE&ohost=www.google.com&cid=CAESVuD2Q-IC5BrQnvErMaNZ8oI--KEbRS1v6rkbGqAqgqhxd2pgXAVPsfrGY2nUGEiYVnQJu-JnlcG4xKJzpJGgeOCx4VU9jCto-m6x-Vl6sLiqs8o8ER4W&category=acrcp_v1_40&sig=AOD64_3USBqruSw6YW_DBMTZzTtUQmxr9A&q&adurl&ved=2ahUKEwiSxMjLx_iNAxU23TgGHTS1GmYQ0Qx6BAgMEAE",
    date: "Jan 2024",
  },
  {
    title: "JavaScript (Intermediate)",
    provider: "WebStorm",
    link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_jtGSyPiNAxU5o2YCHcX0EM8YABABGgJzbQ&co=1&gclid=CjwKCAjwpMTCBhA-EiwA_-MsmT4kdLOcJPBSqaDr8k9Z3isin_KndLIUV47E5bXrz5Vs0AX-Z1xwZxoCvy8QAvD_BwE&ohost=www.google.com&cid=CAESVuD2rht1WtcoxP-qHNj0vSRhoil6zWY4XNJLi_maYlggu2vR-dkRpb6zm7ayiAeAkuDPO1rZ4eKFR2-95wfNIsIWiPoiqqEEtdHje8GChzdLsR0uV2SN&category=acrcp_v1_40&sig=AOD64_00A_UnQMsm4diHccUb7fmf5sBsWg&q&adurl&ved=2ahUKEwiJhcySyPiNAxUHRmwGHbckAVcQ0Qx6BAgQEAE",
    date: "Mar 2024",
  },
  {
    title: "Frontend Development with React",
    provider: "Coursera - Meta",
    link: "https://www.coursera.org/account/accomplishments/certificate/your-id",
    date: "May 2024",
  },
];

export default function Certifications() {
  return (
    <div className="bg-gray-100 py-12 px-6 max-w-4xl mx-auto rounded-xl my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Certifications & Awards
      </h2>
      <ul className="space-y-6">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="bg-[#ffffff] shadow-md p-4 rounded-lg hover:shadow-lg transition"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {cert.title}
            </a>
            <p className="text-sm text-gray-700">
              {cert.provider} — <span className="italic">{cert.date}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
