import React from 'react'
import "./BusDetailsSkeleton.css"
import "../BusDetailsCard.css"

const BusDetailsSkeleton = () => {
  return (
    <div className="BusDetailsCard_wrapper">
        <div className="Bus_info_wrapper">
        <div>
            <div className="skeleton skeleton-text" style={{ width: '35vh' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '35vh' }}></div>
          </div>
          <div className="arivarrival_and_destination_wrapper">
          <div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-button"></div>
          </div>
            <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
            <div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-button"></div>
          </div>
          </div>
        </div>
        <div className="price_and_book_button_wrapper">
        <div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-button"></div>
          </div>
          <div>
            <div className="skeleton skeleton-text" style={{ width: '50%' }}></div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </div>
      </div>
  )
}

export default BusDetailsSkeleton