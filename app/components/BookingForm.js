"use client";
import React from "react";

const BookingForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center ">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
   <div className="relative  rounded-xl p-6 w-[70%] h-[91%] z-10 booking-form">
  <div className="flex gap-5 h-full ">
    
    <div className="image-side h-full overflow-hidden">
  <div className="booking-image h-full">
    <img
      src="/assets/modal_image.png"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    <div className="content-side">
     <div className="flex justify-between items-start ">
        <div>
             <h3 className="heading-3 font-lustria mb-1">Get in Touch</h3>
      <p className="B-1 font-notosans mb-4 para">
        We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.
      </p>
        </div>

        <img src="/assets/black_close.png" className="p-3 icon rounded-full " style={{cursor:"pointer"}} onClick={onClose}></img>
     </div>

      <p className="font-lustria heading-6 mb-1">Full Name</p>
      <input placeholder="Enter name" className="booking-input py-3 px-5 mb-4" />

      <p className="font-lustria heading-6 mb-1">Email Address</p>
      <input placeholder="Enter email" className="booking-input  py-3 px-5 mb-4" />

      <p className="font-lustria heading-6 mb-1">Phone Number</p>
      <input placeholder="Enter phone" className="booking-input  py-3 px-5 mb-4" />

      <p className="font-lustria heading-6 mb-1">Message</p>
      <textarea placeholder="Tell Us about your Project " rows="4" className="booking-input mb-5 py-2 px-5" />

      <button className="send-button py-5">Send Message</button>
    </div>

  </div>
</div>
    </div>
  );
};

export default BookingForm;