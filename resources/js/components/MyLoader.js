import React from "react";
import HelpLinksLoader from "./HelpLinksLoader";

function MyLoader() {
  if (window.innerWidth > 1000){
    return (
        <>
            <div id="side-nav-loading">
                <HelpLinksLoader />
            </div>
            <div id="nothing">
                <svg
                    role="img"
                    width="400"
                    height="460"
                    aria-labelledby="loading-aria"
                    viewBox="0 0 400 460"
                    preserveAspectRatio="none"
                >
                    <title id="loading-aria">Loading...</title>
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        clipPath="url(#clip-path2)"
                        style={{ fill: 'url("#fill")' }}
                    ></rect>
                    <defs>
                        <clipPath id="clip-path2">
                            <circle cx="30" cy="35" r="30" />
                            <rect
                                x="495"
                                y="10"
                                rx="2"
                                ry="2"
                                width="253"
                                height="253"
                            />
                            <circle cx="183" cy="35" r="30" />
                            <rect
                                x="0"
                                y="261"
                                rx="0"
                                ry="0"
                                width="291"
                                height="7"
                            />
                            <rect
                                x="0"
                                y="108"
                                rx="0"
                                ry="0"
                                width="208"
                                height="70"
                            />
                            <rect
                                x="0"
                                y="299"
                                rx="0"
                                ry="0"
                                width="65"
                                height="7"
                            />
                            <rect
                                x="72"
                                y="299"
                                rx="0"
                                ry="0"
                                width="291"
                                height="7"
                            />
                            <rect
                                x="371"
                                y="299"
                                rx="0"
                                ry="0"
                                width="291"
                                height="7"
                            />
                            <rect
                                x="0"
                                y="323"
                                rx="0"
                                ry="0"
                                width="291"
                                height="7"
                            />
                            <rect
                                x="297"
                                y="323"
                                rx="0"
                                ry="0"
                                width="291"
                                height="7"
                            />
                        </clipPath>
                        <linearGradient id="fill">
                            <stop
                                offset="0.599964"
                                stopColor="#f3f3f3"
                                stopOpacity="1"
                            >
                                <animate
                                    attributeName="offset"
                                    values="-2; -2; 1"
                                    keyTimes="0; 0.25; 1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                ></animate>
                            </stop>
                            <stop
                                offset="1.59996"
                                stopColor="#ecebeb"
                                stopOpacity="1"
                            >
                                <animate
                                    attributeName="offset"
                                    values="-1; -1; 2"
                                    keyTimes="0; 0.25; 1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                ></animate>
                            </stop>
                            <stop
                                offset="2.59996"
                                stopColor="#f3f3f3"
                                stopOpacity="1"
                            >
                                <animate
                                    attributeName="offset"
                                    values="0; 0; 3"
                                    keyTimes="0; 0.25; 1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                ></animate>
                            </stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    );
  }
  else{
   return (
   <div id="side-nav-loading">
   <svg
  role="img"
  width="350"
  height="650"
  aria-labelledby="loading-aria"
  viewBox="0 0 350 650"
  preserveAspectRatio="none"
>
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clipPath="url(#clip-path)"
    style={{fill: 'url("#fill")'}}
  ></rect>
  <defs>
    <clipPath id="clip-path">
        <rect x="140" y="333" rx="3" ry="3" width="88" height="6" /> 
        <rect x="159" y="381" rx="3" ry="3" width="52" height="6" /> 
        <rect x="2" y="364" rx="3" ry="3" width="410" height="6" /> 
        <rect x="0" y="414" rx="3" ry="3" width="380" height="6" /> 
        <rect x="107" y="399" rx="3" ry="3" width="178" height="6" /> 
        <circle cx="135" cy="537" r="28" /> 
        <rect x="80" y="85" rx="0" ry="0" width="200" height="200" /> 
        <rect x="25" y="6" rx="0" ry="0" width="300" height="52" /> 
        <rect x="115" y="442" rx="0" ry="0" width="139" height="46" /> 
        <circle cx="235" cy="539" r="26" />
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stopColor="#f3f3f3"
        stopOpacity="1"
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="1.59996"
        stopColor="#ecebeb"
        stopOpacity="1"
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="2.59996"
        stopColor="#f3f3f3"
        stopOpacity="1"
      >
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
    </linearGradient>
  </defs>
</svg></div>
)
  }
}

export default MyLoader;
