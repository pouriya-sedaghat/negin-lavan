import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/background/main.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="xl:w-1/4 w-fit space-y-2">
        <h3 className="font-bold text-center">درباره ما</h3>
        <div className="border-2 rounded-lg">
          <div className="w-35 mx-auto">
            <img
              src="./../../../public/images/logos/univercity.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="text-sm bg-gray-100/50 border-t-2 rounded-lg">
            <ul className="divide-y-2">
              <li className="flex items-center gap-2 p-2">
                <span className="border-2 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="size-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 18v-7"></path>
                    <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                    <path d="M14 18v-7"></path>
                    <path d="M18 18v-7"></path>
                    <path d="M3 22h18"></path>
                    <path d="M6 18v-7"></path>
                  </svg>
                </span>
                <p>دانشگاه آزاد اسلامی واحد یادگار امام</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <span className="border-2 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="size-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <p>استاد جناب آقای پیام خداقلی</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <span className="border-2 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="size-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                </span>
                <p>واحد طراحی واسط کاربری</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <span className="border-2 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="size-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </span>
                <p>دانشجو زهرا صداقت خانیکی</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <span className="border-2 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="size-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                    <path d="M15 22v-5a1 1 0 0 1 1-1h5"></path>
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </span>
                <p>تاریخ ارائه پروژه - 1405/03/23</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
