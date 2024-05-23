import React from 'react';
import style from './bureau.module.css'
import rectangle81 from './assets/Rectangle 81.png'
function Bureau(){
    return(
        <>
        <div className={style.containerb}>
           {/*first row of executive board*/}
           
           <div className={style.positions1}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
        </div>
           {/*second row of executive board*/}
           <div className={style.positions1}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
           </div>
           {/*third row*/}
           <div className={style.positions2}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
        </div>
        {/*configuration in responsiveness*/}
        <div className={style.containerbresp}>
           {/*first row of executive board*/}
           <div className={style.positions2}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
           {/*second row of executive board*/}
           <div className={style.positions2}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
           {/*third row*/}
           <div className={style.positions2}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
            </div>
            {/*fourth row*/}
           <div className={style.positions2}>
                <div className={style.position}>
                    <img src={rectangle81} />
                    <h3>Mohamed islam</h3>
                    <h4>sakouhi</h4>
                    <p>Président</p>
                </div>
                <div className={style.position}>
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