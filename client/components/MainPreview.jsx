import React from 'react'


const MainPreview = () => {

    const text = 'When a young boy vanishes, a small town uncovers a mystery involving sercret experiments , terrifying supernatural forces & a strange little girl.'



    return (
        <div className="main-preview-container">
            
            <div className="main-preview-header-container">
                <div className="main-preview-header">
                    <h1>Stranger Things</h1>
                </div>
                <div className="main-preview-text"> 
                    <p>{text}</p>
                </div>
            </div>

            <img src='/bg.jpeg' alt='Stranger Things image' className='main-preview-img' />
        </div>
    )
}


export default MainPreview