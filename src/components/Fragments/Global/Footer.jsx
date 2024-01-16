import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2024 AnimeKuy</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-11 h-11"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
      <div className="flex items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
        >
          <g clip-path="url(#clip0_1678_2257)">
            <path
              d="M6.47879 6.42765V9.37247C5.77006 9.60006 5.0685 9.76558 4.41704 10.0483C2.66313 10.8001 2.73471 12.6483 3.37901 13.6552C4.23091 14.9932 6.17812 15.407 7.3808 14.4897C8.37588 13.738 8.5978 12.6483 8.60496 11.5104C8.61212 8.43454 8.60496 5.36558 8.5978 2.28972C8.5978 1.53799 8.5978 0.786267 8.5978 -0.00683594H11.6618C12.0126 2.41385 13.3012 3.97937 16 4.20006V7.04144C15.2412 7.14489 14.511 7.06213 13.8023 6.80006C13.1079 6.53799 12.4349 6.22765 11.7119 5.9242C11.7119 6.11041 11.7119 6.28282 11.7119 6.45523C11.6904 8.34489 11.7262 10.2414 11.6403 12.1242C11.5258 14.6552 9.74322 16.9656 7.41659 17.6966C3.7799 18.8276 0.751717 16.4897 0.143216 13.5173C-0.357902 11.0621 0.336505 8.97247 2.54858 7.50351C3.70116 6.73799 5.02554 6.45523 6.47163 6.40696L6.47879 6.42765Z"
              fill="#FFFAF3"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_2257">
              <rect width="16" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <g clip-path="url(#clip0_1678_2251)">
            <path
              d="M9.55129 0C10.9636 0.0420199 12.4041 0.0770365 13.8446 0.140066C14.8072 0.182086 15.7207 0.434206 16.5498 0.945448C17.7514 1.6878 18.4611 2.77331 18.7702 4.13196C18.9459 4.90232 18.981 5.68669 18.988 6.47107C19.0021 8.50903 19.0021 10.547 18.988 12.585C18.988 13.3553 18.9459 14.1327 18.7702 14.8961C18.4329 16.3527 17.653 17.4873 16.332 18.2156C15.5731 18.6358 14.744 18.8319 13.8797 18.895C12.2987 19 10.7177 19.007 9.12969 18.993C8.04759 18.986 6.95846 18.972 5.87636 18.937C4.9629 18.909 4.05647 18.8039 3.19922 18.4467C1.92037 17.9145 1.03502 16.9971 0.522073 15.7154C0.191821 14.8891 0.114528 14.0276 0.0723684 13.1592C-0.0189777 11.2753 0.00210215 9.39845 0.00210215 7.52857C0.00210215 6.68817 0.0442619 5.84777 0.114528 5.00737C0.205874 3.90085 0.550179 2.87136 1.25987 1.99595C1.96956 1.12753 2.87599 0.574272 3.95809 0.322153C4.41482 0.217103 4.88561 0.140066 5.34937 0.12606C6.74064 0.0630299 8.13191 0.0420199 9.55129 0ZM1.66741 9.47549C1.66741 9.47549 1.69552 9.47549 1.70957 9.47549C1.70957 10.4349 1.69552 11.3874 1.70957 12.3468C1.72363 12.9421 1.74471 13.5374 1.822 14.1187C2.01172 15.5754 2.77059 16.6049 4.21808 17.0461C4.59752 17.1651 5.00506 17.2352 5.40558 17.2492C6.48768 17.2982 7.57681 17.3262 8.65891 17.3332C9.98694 17.3402 11.3079 17.3262 12.636 17.3122C13.2824 17.3052 13.9219 17.2842 14.5542 17.1371C15.5099 16.92 16.2687 16.4228 16.7606 15.5684C17.0417 15.0781 17.1963 14.5459 17.2384 13.9856C17.2876 13.3273 17.3368 12.669 17.3368 12.0107C17.3438 10.1058 17.3438 8.20088 17.3227 6.29598C17.3227 5.73572 17.2595 5.16845 17.1611 4.61519C16.9784 3.5787 16.4304 2.77331 15.4888 2.26207C14.8845 1.93292 14.231 1.79985 13.5494 1.77184C12.5446 1.73682 11.5328 1.70181 10.528 1.6948C9.1578 1.6878 7.78058 1.70181 6.41039 1.72282C5.78502 1.72982 5.15965 1.75783 4.54833 1.8909C3.18516 2.18503 2.29278 2.97641 1.92037 4.32805C1.78687 4.81828 1.73768 5.32952 1.72363 5.83376C1.69552 7.04534 1.68147 8.26392 1.66039 9.48249L1.66741 9.47549Z"
              fill="#FFFAF3"
            />
            <path
              d="M9.52114 14.3568C6.82994 14.3848 4.63061 12.1647 4.65871 9.46844C4.68682 6.80718 6.85805 4.66416 9.53519 4.67817C12.2264 4.69218 14.3906 6.8632 14.3836 9.53147C14.3765 12.2838 12.1069 14.3988 9.52114 14.3568ZM12.7183 9.53147C12.7183 7.75963 11.2708 6.31695 9.49303 6.31695C7.76448 6.31695 6.317 7.76663 6.317 9.48945C6.317 11.2893 7.73638 12.704 9.55627 12.704C11.2848 12.704 12.7112 11.2683 12.7112 9.53147H12.7183Z"
              fill="#FFFAF3"
            />
            <path
              d="M15.7115 4.43305C15.7185 5.05634 15.2337 5.55358 14.6153 5.56058C13.997 5.56058 13.5051 5.09136 13.4981 4.48907C13.484 3.86578 13.9689 3.35454 14.5802 3.34753C15.2126 3.34753 15.7045 3.81676 15.7115 4.43305Z"
              fill="#FFFAF3"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_2251">
              <rect width="19" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <g clip-path="url(#clip0_1678_2249)">
            <path
              d="M18 18.974C16.2421 18.974 14.6366 18.9938 13.0322 18.9529C12.7901 18.9466 12.4785 18.7126 12.3274 18.491C10.9096 16.4123 9.52034 14.3132 8.12184 12.2206C8.01427 12.0597 7.90052 11.9032 7.73742 11.6701C6.68556 12.9247 5.66108 14.1448 4.63929 15.3673C3.90438 16.2466 3.11625 17.087 2.45691 18.0232C1.86042 18.8699 1.16059 19.1936 0.103335 18.8858C2.40987 16.1176 4.70677 13.3616 7.02757 10.5767C4.7006 7.08324 2.39291 3.61717 0 0.0236204C1.8076 0.0236204 3.45286 0.00455645 5.09659 0.0470532C5.30981 0.0526135 5.56777 0.338175 5.71621 0.557411C7.15211 2.68185 8.56912 4.82019 10.0201 6.99745C11.7019 4.98144 13.3862 3.02421 14.9948 1.00303C15.6167 0.221806 16.2526 -0.245658 17.3507 0.134827C15.161 2.76367 12.9736 5.38893 10.7395 8.07059C13.1359 11.6689 15.525 15.2573 18 18.9736V18.974ZM15.7166 17.794C15.6487 17.6181 15.6345 17.5446 15.5967 17.489C12.0212 12.2122 8.44612 6.93589 4.85984 1.66709C4.75111 1.50743 4.5348 1.33943 4.36013 1.3291C3.70079 1.28939 3.03759 1.31322 2.33584 1.31322C2.3744 1.45898 2.37594 1.53603 2.41141 1.58885C5.99923 6.88704 9.58743 12.1848 13.1907 17.4719C13.304 17.6379 13.5705 17.767 13.7737 17.7801C14.3917 17.8198 15.0141 17.7944 15.7166 17.7944V17.794Z"
              fill="#FBFBFB"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_2249">
              <rect width="18" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
