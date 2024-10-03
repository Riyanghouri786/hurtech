import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Pop() {
  const [showModal, setShowModal] = useState(false);
  const courses = [
    { href: "/#", name: "Development" },
    { href: "/#", name: "Business" },
    { href: "/#", name: "Finance" },
    { href: "/#", name: "IT&Software" },
    { href: "/#", name: "Personal Development" },
    { href: "/#", name: "Marketing" },
    { href: "/#", name: "Design" },
    { href: "/#", name: "Health & Fitness" },
  ];
  return (
    <>
      <button
        className="px-4 py-2 font-bold text-black"
        onClick={() => setShowModal(true)}
      >
        <IoReorderThreeOutline className="font-black text-[40px]" />
      </button>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="max-w-lg p-6 mx-auto text-white rounded-lg shadow-lg bg-popup">
              <button
                className="absolute w-full px-4 py-2 text-right text-sunglow"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="relative top-[-25px] left-[430px] size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h1 className="mb-4 text-xl font-semibold">Course Categories</h1>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              </p>
              <p className="flex flex-col">
                {" "}
                {courses.map((course, index) => {
                  return (
                    <Link className="pt-2" key={index} href={course.href}>
                      {course.name}
                      <hr className="mt-2" />
                    </Link>
                  );
                })}
              </p>
              <h1 className="pt-4 mb-4 text-xl font-semibold">
                Connect with us
              </h1>
              <div className="flex items-center gap-5">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-yellow-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .73.593 1.326 1.325 1.326h11.49v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.098 2.796.143v3.243h-1.917c-1.504 0-1.796.716-1.796 1.763v2.309h3.591l-.467 3.622h-3.124v9.294h6.124c.73 0 1.324-.596 1.324-1.326v-21.348c0-.733-.594-1.326-1.325-1.326z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-yellow-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.715-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.869 3.213 2.191 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.923-.086.624 1.956 2.433 3.379 4.576 3.419-1.675 1.309-3.781 2.091-6.073 2.091-.394 0-.779-.023-1.161-.067 2.168 1.394 4.742 2.209 7.514 2.209 9.051 0 13.999-7.496 13.999-13.986 0-.21 0-.423-.016-.637.961-.689 1.8-1.56 2.462-2.548l-.047-.02z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-yellow-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.117C19.538 3.496 12 3.496 12 3.496s-7.538 0-9.388.573a2.998 2.998 0 00-2.11 2.117A31.353 31.353 0 000 12c-.006 1.927.2 3.835.502 5.814a2.998 2.998 0 002.11 2.117C4.462 20.504 12 20.504 12 20.504s7.538 0 9.388-.573a2.998 2.998 0 002.11-2.117A31.365 31.365 0 0024 12a31.365 31.365 0 00-.502-5.814zm-14.768 9.43V8.385l6.431 3.614-6.431 3.616z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-yellow-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.804 20h-3.196v-11h3.196v11zm-1.597-12.629c-1.04 0-1.882-.842-1.882-1.871s.842-1.871 1.882-1.871 1.882.842 1.882 1.871-.842 1.871-1.882 1.871zm13.401 12.629h-3.195v-5.609c0-1.337-.027-3.061-1.865-3.061-1.868 0-2.153 1.46-2.153 2.967v5.703h-3.195v-11h3.069v1.501h.043c.427-.805 1.47-1.653 3.025-1.653 3.238 0 3.835 2.131 3.835 4.903v6.249z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-yellow-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.796.24 2.215.403a4.412 4.412 0 011.601 1.04 4.412 4.412 0 011.04 1.602c.163.418.349 1.043.403 2.213.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.796-.403 2.215a4.418 4.418 0 01-1.04 1.601 4.418 4.418 0 01-1.601 1.04c-.418.163-1.043.349-2.213.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.796-.24-2.215-.403a4.418 4.418 0 01-1.601-1.04 4.418 4.418 0 01-1.04-1.601c-.163-.418-.349-1.043-.403-2.213C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.796.403-2.215a4.412 4.412 0 011.04-1.602A4.412 4.412 0 015.28 2.566c.418-.163 1.043-.349 2.213-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.279.059-2.157.273-2.91.58a6.565 6.565 0 00-2.391 1.587 6.565 6.565 0 00-1.587 2.391c-.307.753-.522 1.631-.58 2.91C2.177 8.333 2.163 8.741 2.163 12c0 3.259.014 3.667.072 4.947.059 1.279.273 2.157.58 2.91a6.565 6.565 0 001.587 2.391 6.565 6.565 0 002.391 1.587c.753.307 1.631.522 2.91.58 1.28.059 1.688.072 4.947.072s3.667-.014 4.947-.072c1.279-.059 2.157-.273 2.91-.58a6.565 6.565 0 002.391-1.587 6.565 6.565 0 001.587-2.391c.307-.753.522-1.631.58-2.91.059-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.059-1.279-.273-2.157-.58-2.91a6.565 6.565 0 00-1.587-2.391A6.565 6.565 0 0019.757 2.59c-.753-.307-1.631-.522-2.91-.58-1.28-.059-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z" />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
}
