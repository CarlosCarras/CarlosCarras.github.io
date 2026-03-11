import React from "react";
import "./SpaceXCodingInterview.css";
import Button from '../../../../components/Button/Button';

function SpaceXCodingInterview() {
    return (
        <div className="spacex-interview-container">
            <div className='spacex-title-block'>
                <h1>Flight Software Interview Reseources</h1>
            </div>
            <div className='button-group-container'>
                <Button name="UHF Transceiver (C++)" href={"https://github.com/CarlosCarras/d3-onboard-radio/blob/master/UHF_Transceiver.cpp"} newtab={true}/>
                <Button name="IMU  (C++)" href={"https://github.com/CarlosCarras/ICM20948/blob/main/ICM20948.cpp"} newtab={true}/>
                <Button name="Insole Visualizer (Python/JS)" href={"https://github.com/CarlosCarras/xsensor-visualizer/blob/main/xsvisualizer/xsvisualizer.py"} newtab={true}/>
                <Button name="Summer Camp (C)" href={"https://github.com/CarlosCarras/summer-camp-code-students-2025/blob/main/tests/test_mobilePlatform/test_mobilePlatform.ino"} newtab={true}/>
                <Button name="Personal Website (JS)" href={"http://github.com/CarlosCarras/CarlosCarras.github.io/blob/main/src/components/RobotArm/RobotArm.js"} newtab={true}/>
                <Button name="Deep Learning Framework (PyTorch)" href={"https://github.com/CarlosCarras/motion-primitives/blob/main/src/common/datasets/base_dataset.py"} newtab={true}/>
            </div>
        </div>
    )
}

export default SpaceXCodingInterview;