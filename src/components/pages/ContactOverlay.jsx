
import { useContext,useRef,useEffect, useState } from "react"
import PortfolioContext from "../../context/PortfolioContext"
import { NavLink } from "react-router-dom";


function ContactOverlay() {
  const {overlay,setOverlay} = useContext(PortfolioContext)
  const overlayRef = useRef(null);
  const [error,setError] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setOverlay(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [overlayRef,setOverlay]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1000);
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      {
        overlay
        ?
        <>
          <div className="overlay-container" ref={overlayRef}>
            <div className="overlay-flex">
              <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <h3 onClick={() => copyToClipboard('07049657259')} style={{ cursor: 'pointer' }}> 07049657259</h3>
                {
                  error ? <><p>copied!</p></> : <></>
                }
              </div>
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <NavLink to="mailto:mhedheyghold12@gmail.com">
                  <h3>mhedheyghold12@gmail.com</h3>
                </NavLink>
            </div>
          </div>
    </div>
        </>
        :
        <></>
      }
    </>
  )
}

export default ContactOverlay
