import React from 'react';

import Shape from '../../images/process/item-shape.svg'
import img1 from '../../images/process/1.jpg'
import img2 from '../../images/process/2.jpg'
import img3 from '../../images/process/3.jpg'
import img4 from '../../images/process/4.jpg'

const ProcessData = [
    {
        id: '1',
        Img: img1,
        title: 'Select Services',
        desctiption: 'Pellentesque habitant morbi trist fames ac turp egestas. Aliquam enim feugiat mattis.',
        Shapebg: Shape,
    },
    {
        id: '2',
        Img: img2,
        title: 'Percel Information',
        desctiption: 'Pellentesque habitant morbi trist fames ac turp egestas. Aliquam enim feugiat mattis.',
        Shapebg: Shape,
    },
    {
        id: '3',
        Img: img3,
        title: 'Transportation',
        desctiption: 'Pellentesque habitant morbi trist fames ac turp egestas. Aliquam enim feugiat mattis.',
        Shapebg: Shape,
    },
    {
        id: '4',
        Img: img4,
        title: 'Takeover Products',
        desctiption: 'Pellentesque habitant morbi trist fames ac turp egestas. Aliquam enim feugiat mattis.',
        Shapebg: Shape,
    },
]

const ProcessSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="process-wrap">
                    <div className="row">
                        {ProcessData.slice(0, 4).map((proce, item) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={item}>
                                <div className="process-item">
                                    <div className="top-contnent">
                                        <img src={proce.Img} alt="" />
                                        <div className="item-shape">
                                            <img src={proce.Shapebg} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>Step - {proce.id}</span>
                                        </div>
                                        <div className="shape-1">
                                            <svg width="158" height="89" viewBox="0 0 158 89" fill="none">
                                                <g opacity="0.15">
                                                    <path d="M0.0332031 30.3796L157.05 0L157.354 43.7086L30.269 88.9426"
                                                        fill="#868686" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="shape-2">
                                            <svg width="48" height="17" viewBox="0 0 48 17" fill="none">
                                                <path
                                                    d="M47.3549 0.599976L22.8851 16.5564L0.691406 12.5793L47.3549 0.599976Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h2>{proce.title}</h2>
                                        <p>
                                           {proce.desctiption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-shape">
                        <svg width="1014" height="93" viewBox="0 0 1014 93" fill="none">
                            <path
                                d="M1 50.9659C56.3481 18.4898 187.969 -31.1736 271.668 29.9813C376.292 106.425 467.026 98.4469 528 77.5C594.713 54.5817 761.5 15.5 831.5 24C901.5 32.5 936.5 57 1013.5 75"
                                stroke="#C4CDD3" strokeWidth="1.5" strokeDasharray="2 2" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;