import React from 'react'
import './Packages.css'
const Packages = () => {
  return (
    <>
    <div className='package-container'>
      <div className='packages-text-content'>
        <h1>Checkout our packages</h1>
        <p>Here, this place is where something remarkable appears, pleasing to some, just and unique, without fault, and orderly.</p>
        <p>It is a setting for praise and admiration. It exists with decoration, fulfillment, and appropriateness.</p>
      </div>
      <div className='package-cards'>
        <ul className='package-cards-ul'>
          <li className='package-cards-li'>
            <div className='package-card-single'>
                 <div className='section section-1'>
                      <img src='#' alt='image' className='img'></img>
                 </div>
                 <div className='section section-2'>
                        <div className='info text-box'>
                            <h2>hhhhaaa</h2>
                            <p>The golden rays of the morning sun pierced through the dense canopy, casting dappled patterns on the forest floor.</p>
                        </div>
                        <div className='info information-box'>
                            <div className='box'>
                            <div className='box-div'>
                                    <img src='/time.png' alt='img'></img>
                                    <p>1J/5F</p>
                              </div>
                              <div className='box-div'>
                                    <img src='/users.png' alt='img'></img>
                                    <p>Max:10</p>
                              </div>
                              <div className='box-div'>
                                    <img src='/location.png' alt='img'></img>
                                    <p>USA</p>
                              </div>
                            </div>
                        </div>
                 </div>
                 <div className='section section-3'>
                       <div className='s3 ratings'>
                              <p>(25 reviews)</p>
                              <img src='/rating.png'></img>
                       </div>
                       <div className='s3 price'>
                              <h1>₹10000</h1>
                              <span>/per person</span>
                       </div>
                       <div className='s3 booking-btn'>
                        <button>Book Now</button>
                       </div>
                 </div>
            </div>
          </li>
          <li className='package-cards-li'>
            <div className='package-card-single'>
                  <div className='section section-1'>
                      <img src='/img4.jpg' alt='image' className='img'></img>
                  </div>
                  <div className='section section-2'>
                        <div className='info text-box'>
                              <h2>Star gazzing, At greenland north. Hurry Up!!</h2>
                              <p>The golden rays of the morning sun pierced through the dense canopy, casting dappled patterns on the forest floor.</p>
                        </div>
                        <div className='info information-box'>
                              <div className='box'>
                              <div className='box-div'>
                                      <img src='/time.png' alt='img'></img>
                                      <p>1J/5F</p>
                              </div>
                              <div className='box-div'>
                                    <img src='/users.png' alt='img'></img>
                                    <p>Max:10</p>
                              </div>
                              <div className='box-div'>
                                    <img src='/location.png' alt='img'></img>
                                    <p>Greenland</p>
                              </div>
                              </div>
                        </div>
                  </div>
                  <div className='section section-3'>
                       <div className='s3 ratings'>
                            <p>(25 reviews)</p>
                            <img src='/rating.png'></img>
                       </div>
                       <div className='s3 price'>
                            <h1>₹10000</h1>
                            <span>/per person</span>
                       </div>
                       <div className='s3 booking-btn'>
                            <button>Book Now</button>
                       </div>
                  </div>
            </div>
          </li>
          <li className='package-cards-li'> 
          <div className='package-card-single'>
                  <div className='section section-1'>
                        <img src='/img3..jpg' alt='image' className='img'></img>
                  </div>
                  <div className='section section-2'>
                        <div className='info text-box'>
                             <h2>Star gazzing, At greenland north. Hurry Up!!</h2>
                             <p>The golden rays of the morning sun pierced through the dense canopy, casting dappled patterns on the forest floor.</p>
                        </div>
                        <div className='info information-box'>
                             <div className='box'>
                              <div className='box-div'>
                                      <img src='/time.png' alt='img'></img>
                                      <p>1J/5F</p>
                              </div>
                              <div className='box-div'>
                                    <img src='/users.png' alt='img'></img>
                                    <p>Max:10</p>
                              </div>
                              <div className='box-div'>
                                    <img src='/location.png' alt='img'></img>
                                    <p>Egypt</p>
                              </div>
                             </div>
                        </div>
                  </div>
                  <div className='section section-3'>
                       <div className='s3 ratings'>
                            <p>(25 reviews)</p>
                            <img src='/rating.png'></img>
                       </div>
                       <div className='s3 price'>
                            <h1>₹10000</h1>
                            <span>/per person</span>
                       </div>
                       <div className='s3 booking-btn'>
                             <button>Book Now</button>
                       </div>
                  </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='view-all-packages'>
        <button>View All Packages</button>
      </div>
    </div>
      
  </>
  )
}

export default Packages
