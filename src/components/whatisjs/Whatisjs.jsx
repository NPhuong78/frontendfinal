
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Whatisjs.css"
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTrophy, faUserGraduate, faGripLines, faCircle } from '@fortawesome/free-solid-svg-icons';


export default function Whatisjs() {

    return (
        <div className="Whatisjs">
            <section className="image">
                <div className="JS">
                    <p className="text">JS là gì?</p>
                </div>
            </section>
            <p className="Introduction">Được thành lập vào tháng 2 năm 2014 câu lạc bộ Japanese Software mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung.
                Khác với những câu lạc bộ khác câu lạc bộ Japanese Software có những hoạt động như chia sẻ kinh nghiệm , học tập cùng những sinh viên giỏi, tìm hiểu về văn hóa nhật bản, Thử sức với những cuộc thi học thuật tầm cỡ như Coding Project, Algorithm Arena. Những hoạt động của CLB luôn hướng đến sinh viên, giúp sinh viên phát triển bản thân, thỏa mãn đam mê và sáng tạo.
                CLB chia ra làm 4 ban là Ban chuyên môn, Ban nội dung, Ban Văn Hóa, Ban Truyền Thông, mỗi ban với một nhiệm vụ riêng vì mục tiêu Phát triển CLB đã cố gắng làm việc cho nên kể từ lúc thành lập CLB đã đạt rất nhiều thành tích với 11 lần đạt CLB xuất xác của trường đại học FPT
            </p>

            <section className="achievement">
                <div className="line"><FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon></div>
                <h2 className="Title">Thành Tựu</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon></li>
                </ul>
                <ul>
                    <li>
                        <div className="C1">
                            {/* <CountUp
                                start={0}
                                end={1000}
                                duration={3}
                            /> */}
                            <p>+</p>
                        </div>
                    </li>
                    <li>
                        <div className="C2">
                            {/* <CountUp
                                start={0}
                                end={11}
                                duration={3}
                            /> */}
                            <p>+</p>
                        </div>
                    </li>
                    <li>
                        <div className="C3">
                            {/* <CountUp
                                start={0}
                                end={50}
                                duration={3}
                            /> */}
                            <p>+</p>
                        </div>
                    </li>
                </ul>
                <ul className="Text">
                    <li className="Nember"><p>Thành viên đang hoạt động ở CLB</p></li>
                    <li className="CLB"><p>Đạt danh hiệu CLB xuất xắc</p></li>
                    <li className="CV"><p>Sinh viên đạt danh hiệu Cóc Vàng</p></li>
                </ul>
            </section>

            <section className="Boss">
                <div className="line"><FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon></div>
                <h2 className="Title">Chủ Nghiệm Qua Các Đời</h2>
                <div className="Table">
                <table>
                    <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN1" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN2" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN3" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN4" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN5" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN6" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN7" width={300} /></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                        <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN8" width={300} /></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </section>

            <section className="Question">
                <div className="line"><FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon></div>
                <h2 className="Title">Những câu hỏi thường gặp</h2>
            </section>
        </div>
    )
}