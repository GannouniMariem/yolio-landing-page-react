import './css/style.css';
import React from 'react';
import white_logo from './assets/images/white-logo.png';
import image from './assets/images/ramadhan.png';
import '/node_modules/glightbox/dist/css/glightbox.min.css';
import video from './assets/demo.mp4'

import { motion } from 'framer-motion';



function App() {
  return (
    <React.Fragment>
    <main>
        <div className="container-fluid">
            <div className="logo m-lg-5 p-2 p-lg-0">
                <img src={white_logo} alt=""/>
            </div>
            <div className="row">
                <div className="col-xl-6 col-md-12 col-sm-12 pb-0">
                    <div className="text-section mx-xl-5 ">
                        <p><span>yolio</span> <br/> will present</p>
                        <p>MEAN Stack workshops during Ramadan</p>
                        <p className="fw-bold"><i className="uil uil-circle px-2"></i> Amine jbali :  <span className='fs-5'>Trainer & Full stack developer</span> </p>
                        <p className='fw-semibold fs-5'><i className="uil uil-schedule px-2"></i> Every weekend during Ramadan </p>
                        
                        <form className="input my-5 d-flex justify-content-lg-start justify-content-center " id="form">
                            <input type="email" placeholder="your e-mail here" required/>
                            <button type="submit" className="btn signin" id="botton">
                                <span className="signin--front">sign in</span>
                                <span className="signin--back">thank you</span>
                                <div className="rainbow"></div>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12 col-sm-12 d-flex justify-content-center">
                    <motion.div 
                        className=''
                        initial={{ y:-300,x:-1 }}
                        animate={{ y:-5,x:-5}}
                        transition={{
                          type:"spring",
                          stiffness: 280,
                          damping: 15
                        }}
                    >
                        <img src={image} className="image-fluid " alt=""/>
                    </motion.div>
                </div>
            </div>
        </div>
    </main>

    </React.Fragment>
  );
}

export default App;

/**
 * 
 * initial={{ y:-200 }}
                        animate={{ y: 0 }}
                        transition={{
                            type:"spring",
                            ease: "easeOut",
                            stiffness: 300,
                            duration: 0.7,
                            damping: 20
                        }}
 */