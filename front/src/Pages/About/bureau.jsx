import React from 'react';
import './bureau.css'
import rectangle81 from './assets/Rectangle 81.png'
function Bureau(){
    return(
        <>
        <div className='containerb'>
           {/*first row of executive board*/}
           
           <div className='positions1'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
        </div>
           {/*second row of executive board*/}
           <div className='positions1'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
           </div>
           {/*third row*/}
           <div className='positions2'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
        </div>
        {/*configuration in responsiveness*/}
        <div className='containerbresp'>
           {/*first row of executive board*/}
           <div className='positions2'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
           {/*second row of executive board*/}
           <div className='positions2'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
           {/*third row*/}
           <div className='positions2'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
            {/*fourth row*/}
           <div className='positions2'>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className='position'>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Bureau;