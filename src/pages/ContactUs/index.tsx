import { useEffect } from "react";

const ContactUs = () => {
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
        <h3 className="font-bold text-center">تماس با ما</h3>
        <div className="border-2 rounded-lg">
          <div className="w-80 mx-auto pt-3.5">
            <img
              src="./../../../public/images/logos/support.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="text-sm bg-gray-100/50 border-t-2 rounded-lg">
            <ul className="divide-y-2">
              <li className="flex items-center gap-2 p-2">
                <span className="border-2 rounded-full p-2 ps-2 pb-1.5 pt-2 pe-1.5">
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
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </span>
                <p dir="ltr">@skylerwalker_x</p>
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
                    <title>X</title>
                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                  </svg>
                </span>
                <p dir="ltr">@skylerwalker4199</p>
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
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </span>
                <p dir="ltr">skyler.walker4199@gmail.com</p>
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
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    <path d="M12 11h.01"></path>
                    <path d="M16 11h.01"></path>
                    <path d="M8 11h.01"></path>
                  </svg>
                </span>
                <p dir="ltr">+98 9335242103</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
