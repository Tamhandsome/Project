import React from 'react';
import './Service.scss';
import Header from '../components/HomePage/Header.js';
import SectionService from '../components/Service/SectionService.js';
import FindDoctor from '../components/HomePage/FindDoctor.js';
import DoctorCard from '../components/Service/DoctorCard.js';
import Footer from '../components/HomePage/Footer.js';


function Service() {
    return (
        <div className="Service">
            <Header />
            <SectionService />
            <FindDoctor />
            <DoctorCard />
            <Footer />
        </div>
    );
}

export default Service;
