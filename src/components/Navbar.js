import React from 'react';
import logo from "../components/images/image 163.png";

const Navbar = () => {
  return (
    <div style={{ width: "100%", height: 57, position: 'relative' }}>
      {/* Line 6 */}
      <div style={{ left: 151.5, top: 22, position: 'absolute' }}>
        <svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0L0.5 30" stroke="black" />
        </svg>
      </div>

      {/* QwikDeploy Text */}
      <div style={{ width: 335, height: 42, left: 55, top: 9, position: 'absolute', textAlign: 'center' }}>
        <span style={{ color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: 600, wordWrap: 'break-word' }}>Qwik</span>
        <span style={{ color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: 300, wordWrap: 'break-word' }}>Deploy</span>
      </div>

      {/* Deloitte Text */}
      <div style={{ width: 167, height: 59, left: 0, top: 0, position: 'absolute', textAlign: 'center' }}>
        <span style={{ color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: 700, wordWrap: 'break-word' }}>Deloitte</span>
        <span style={{ color: '#80BC00', fontSize: 20, fontFamily: 'Inter', fontWeight: 700, wordWrap: 'break-word' }}>.</span>
      </div>

      {/* Rectangle 154 */}
      <div style={{ width: "100%", height: 57, left: 0, top: 4, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />

      {/* Notification Icon */}
      <div style={{ left: 1657, top: 23, position: 'absolute' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6099_1693)">
            <rect width="16" height="16" fill="white" fillOpacity="0.01" />
            <path d="M13.4286 12.5692H13V6.49777C13 3.97813 11.1375 1.89598 8.71429 1.54955V0.854911C8.71429 0.460268 8.39464 0.140625 8 0.140625C7.60536 0.140625 7.28571 0.460268 7.28571 0.854911V1.54955C4.8625 1.89598 3 3.97813 3 6.49777V12.5692H2.57143C2.25536 12.5692 2 12.8246 2 13.1406V13.7121C2 13.7906 2.06429 13.8549 2.14286 13.8549H6C6 14.9585 6.89643 15.8549 8 15.8549C9.10357 15.8549 10 14.9585 10 13.8549H13.8571C13.9357 13.8549 14 13.7906 14 13.7121V13.1406C14 12.8246 13.7446 12.5692 13.4286 12.5692ZM8 14.7121C7.52679 14.7121 7.14286 14.3281 7.14286 13.8549H8.85714C8.85714 14.3281 8.47321 14.7121 8 14.7121ZM4.28571 12.5692V6.49777C4.28571 5.50491 4.67143 4.57277 5.37321 3.87098C6.075 3.1692 7.00714 2.78348 8 2.78348C8.99286 2.78348 9.925 3.1692 10.6268 3.87098C11.3286 4.57277 11.7143 5.50491 11.7143 6.49777V12.5692H4.28571Z" fill="black" fillOpacity="0.45" />
          </g>
          <defs>
            <clipPath id="clip0_6099_1693">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Notification Badge */}
      <div style={{ width: 16, height: 16, left: 1665, top: 15, position: 'absolute', background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <div style={{ height: 16, paddingLeft: 4, paddingRight: 4, background: '#E6F7FF', borderRadius: 100, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ width: 8, height: 20, textAlign: 'center', color: '#1890FF', fontSize: 12, fontFamily: 'Roboto Mono', fontWeight: 400, lineHeight: 20, wordWrap: 'break-word' }}>9</div>
        </div>
      </div>

      {/* Line 7 */}
      <div style={{ left: 149.5, top: 21, position: 'absolute' }}>
        <svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0L0.5 30" stroke="black" />
        </svg>
      </div>

      {/* QwikDeploy Text */}
      <div style={{ width: 173, height: 42, left: 150, top: 15, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Open Sans', fontWeight: 400, wordWrap: 'break-word' }}>QwikDeploy</div>

      {/* Avatar */}
      <div style={{ width: 32, height: 32, left: 1688, top: 17, position: 'absolute', background: '#007CB0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex' }}>
        <div style={{ alignSelf: 'stretch', flex: '1 1 0', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ flex: '1 1 0', alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: 400, lineHeight: 22, wordWrap: 'break-word' }}>JD</div>
        </div>
      </div>

      {/* Image */}
      <img style={{ width: 126, height: 39, left: 20, top: 13, position: 'absolute' }} src={logo} alt="Logo" />
    </div>
  );
};

export default Navbar;