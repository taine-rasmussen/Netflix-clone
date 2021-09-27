import React from 'react'


const MainPreview = () => {

    const text = 'When a young boy vanishes, a small town uncovers a mystery involving sercret experiments, terrifying supernatural forces & a strange little girl.'

    return (
        <div className="main-preview-container">
            <div className="main-preview-header-container">
                <div className="main-preview-header"><h1 className='main-header'>STRANGER</h1></div>
                    <h1 className='main-header-btm'>THINGS</h1>
                        <div className="main-preview-text"><p>{text}</p></div>
                            <div className="main-preview-btn-container">
                                <button className="play-btn">▶ Play</button>
                                <button className="info-btn">More Info</button>
                            </div>
            </div>
            <img src='/bg.jpeg' alt='Stranger Things image' className='main-preview-img' />
        </div>
    )
}





// afermations in the mirror! buiud the habbit!


export default MainPreview