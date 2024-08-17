
import { useContext,useRef,useEffect } from "react"
import PortfolioContext from "../../context/PortfolioContext"


function ContactOverlay() {
  const {overlay,setOverlay} = useContext(PortfolioContext)
  const overlayRef = useRef(null);

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
  }, [overlayRef]);

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
                <h3>07049657259</h3>
              </div>
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <h3>mhedheyghold12@gmail.com</h3>
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
