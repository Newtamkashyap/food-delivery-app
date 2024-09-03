import React from 'react';
import './appDownload.css';

function AppDownload() {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience DownLoad <br /> Tomato App</p>
            <div className='app-download-platforms'>
                <img src={"images/play_store.png"} alt="" />
                <img src={"images/app_store.png"} alt="" />

            </div>
        </div>
    )
}

export default AppDownload