import React from 'react'
import '../styles/ECGWaveForm.css'

const ECGWaveform = () => {
  return (
    <div className="ecg-container">
      <svg
        className="ecg-svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          className="ecg-path"
          d="M0 50 
             L30 50 
             L45 45 
             L60 55 
             L75 50 
             L90 50 
             L100 30 
             L110 90 
             L120 5 
             L130 40 
             L150 55 
             L180 50
             
             L230 50 
             L245 45 
             L260 55 
             L275 50 
             L290 50 
             L300 30 
             L310 90 
             L320 5 
             L330 40 
             L350 55 
             L380 50
             
             L430 50 
             L445 45 
             L460 55 
             L475 50 
             L490 50 
             L500 30 
             L510 90 
             L520 5 
             L530 40 
             L550 55 
             L580 50
             
             L630 50 
             L645 45 
             L660 55 
             L675 50 
             L690 50 
             L700 30 
             L710 90 
             L720 5 
             L730 40 
             L750 55 
             L780 50
             
             L830 50 
             L845 45 
             L860 55 
             L875 50 
             L890 50 
             L900 30 
             L910 90 
             L920 5 
             L930 40 
             L950 55 
             L980 50
             
             L1030 50 
             L1045 45 
             L1060 55 
             L1075 50 
             L1090 50 
             L1100 30 
             L1110 90 
             L1120 5 
             L1130 40 
             L1150 55 
             L1180 50
             L1200 50"
        />
        <rect className="cursor" x="0" y="0" width="2" height="100" />
      </svg>
    </div>
  )
}

export default ECGWaveform
