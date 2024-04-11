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
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
        </div>
           {/*second row of executive board*/}
           <div className='positions1'>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
           </div>
           {/*third row*/}
           <div className='positions2'>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
                <div className='position'>
                    <img src={rectangle81} /><br/><br/>
                    <h3>Mohamed islam</h3><br/><br/>
                    <h4>sakouhi</h4><br/><br/>
                    <p>Président</p><br/><br/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Bureau;