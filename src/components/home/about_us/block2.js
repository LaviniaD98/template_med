import React from 'react'
import Block3 from './block3';

const Block2 = () => {
    return (
        <div className="col-12 col-md-6 my-3" data-aos="flip-up">
            <div className="card_custom">
                <h2 className="display-3 bg-transparent">About</h2>
                <div className="row">
                    <div className="col-4 text-accent">
                        <h2 className="display-3 bg_grey_light">Us</h2>
                    </div>
                    <div className="col-8 align-items-center d-flex">
                        <p>
                            <strong>É la prima piattaforma</strong> che offre la digitalizzazione della simulazione medica avanzata
                        </p>
                    </div>
                    <div className="col-8 mt-2">
                        <p>Il più <b>grande repository</b> di procedure mediche che rivoluzionerà l'assistenza sanitaria e la formazione.</p>
                    </div>
                </div>
            </div>
            <Block3/>
        </div>
    )
}

export default Block2;