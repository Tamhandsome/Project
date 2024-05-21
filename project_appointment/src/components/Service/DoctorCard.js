import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/DoctorCard.scss';

function DoctorCard() {
    return (
        <div className="doctor-card">
            <img src="path/to/doctor-image.jpg" alt="Doctor" className="doctor-card__image" />
            <div className="doctor-card__info">
                <FaStar size={50} />
                <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                <button className="btn">View Profile</button>
            </div>
        </div>
    );
}

export default DoctorCard;
