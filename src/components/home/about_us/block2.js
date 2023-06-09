import React from 'react'
import Block3 from './block3';

const Block2 = () => {
    return (
        <div className="col-12 col-lg-6 my-4 h-100" data-aos="flip-up">
            <div className="card_custom shadow-lg" id="about_us">
                <div className="row mx-auto">
                    <div className="col-12 col-lg-4 align-items-start d-flex">
                        <h2 className="display-3 fw-bold bg-transparent text-start">About <br/> <span className="text-accent fw-bold">Us</span></h2>
                    </div>
                    <div className="col-12 col-lg-8 align-items-center align-items-lg-end d-flex ">
                        <p className="ms-lg-5 ps-lg-3 py-3">
                            <strong>È la prima piattaforma</strong> che offre la digitalizzazione della simulazione medica avanzata
                        </p>
                    </div>
                    <div className="col-12 mt-2 pt-lg-2 justify-content-lg-center d-flex">
                        <p>Il più <b>grande repository</b> di procedure mediche che rivoluzionerà l'assistenza sanitaria e la formazione.</p>
                    </div>
                </div>
            </div>
            <Block3/>
        </div>
    )
}

export default Block2;