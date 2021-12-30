import React from 'react';
import './FourYearPlanContent.css'
import './../Resume/ResumeContent.css'

const four_year_plan = [
                            [
                                ["MAC3474:   Calculus 3 Honors", 3],
                                ["MAP2302:   Differential Equations", 3],
                                ["PHY2060:   Enriched Physics 1 with Calculus", 3],
                                ["CHM2046/L: General Chemistry 2 & Lab", 4],
                                ["PHI2010:   Introduction to Philosophy", 3],
                                ["Total: ", 18]
                            ],
                            [
                                ["PHY2061/L: Enriched Physics 2 with Calculus & Lab", 4],
                                ["IUF1000:   What is the Good Life?", 3],
                                ["EML2023:   Computer Aided Graphics and Design", 3],
                                ["EMA3010:   Materials", 3],
                                ["COP3503:   Programming Fundamentals 2", 3],
                                ["EGM2511:   Statics", 3],
                                ["Total: ", 19]
                            ],
                            [
                                ["COT3100:   Discrete Structures", 3],
                                ["EML3100:   Thermodynamics", 3],
                                ["ENC3254:   Professional Writing in Discipline", 3],
                                ["Total: ", 9]
                            ],
                            [
                                ["EEL3111C:  Circuits 1 ", 4],
                                ["EGM3344:   Numerical Analysis", 3],
                                ["COP3530:   Data Structures ", 4],
                                ["EGM 3401:  Dynamics", 3],
                                ["EGM3520:   Mechanics of Materials ", 3],
                                ["EGS4034:   Ethics & Professionalism ", 1],
                                ["Total: ", 18]
                            ],
                            [
                                ["EGN3353C:  Fluid Mechanics", 3],
                                ["EEL3701C:  Digital Logic and Computer Systems", 4],
                                ["EML2322L:  Design and Manufacturing Lab", 2],
                                ["CDA3101:   Introduction to Computer Organization", 3],
                                ["STA4321:   Introduction to Probability", 3],
                                ["Total: ", 15]
                            ],
                            [
                                ["EEL3135:   Signals and Systems", 4],
                                ["EML4312:   Control Systems", 3],
                                ["MAS3114:   Computational Linear Algebra", 3],
                                ["Total: ", 10]
                            ],
                            [
                                ["CEN3031:   Intro to Software Engineering", 3],
                                ["EEL3744C:  Microprocessor Applications", 4],
                                ["EML3005:   Mechanical Design 1", 3],
                                ["EEE4773:   Machine Learning", 3],
                                ["EML3301C:  Mechanics of Materials Lab", 3],
                                ["Total: ", 16]
                            ],
                            [
                                ["EEL3923C:  Electrical Design 1", 3],
                                ["EML4220:   Vibrations", 3],
                                ["EML4140:   Heat Transfer", 3],
                                ["EEL4712C:  Digital Design", 4],
                                ["EML4314C:  Controls Lab", 3],
                                ["Total: ", 16]
                            ],
                            [
                                ["EML4501:   Mechanical Design 2", 3],
                                ["EML4147C:  Thermal Systems Design & Lab", 3],
                                ["EEL4598:   Computer Communications", 3],
                                ["EEL4610:   State Variable Methods", 3],
                                ["Total: ", 12]
                            ],
                            [
                                ["EML6324:   Production Engineering", 3],
                                ["EML5526:   Finite Element Analysis and Design", 3],
                                ["EEL4924C:  Electrical Engineering Design 2", 3],
                                ["EGN4912:   Engineering Directed Independent Research", 2],
                                ["EML4905:  Individual Study in Mechanical Engineering", 3],
                                ["Total: ", 14]
                            ],
                            [
                                ["EML5311:   Control System Theory", 3],
                                ["COP4600:   Operating Systems", 3],
                                ["Total: ", 6]
                            ],
                       ];


function FourYearPlanContent() {
    return (
        <div className="paper-content">
            <div className="header">
                <h1 className="name tnr">Four Year Plan</h1>
                <div className="entry">
                    <h2 className="info-content tnr">Phone: (787) 668-8096</h2>
                    <div className="dotted-bullet"></div>
                    <h2 className="info-content tnr">Email: c.carrasquillo@ufl.edu</h2>
                    <div className="dotted-bullet"></div>
                    <h2 className="info-content tnr">Domain: http://www.CarlosCarras.tech</h2>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 1<span style={{float:"right"}} className="tnr">Fall, 2017</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[0][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[0][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[0][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[0][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[0][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[0][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[0][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[0][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[0][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[0][4][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[0][5][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[0][5][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 2<span style={{float:"right"}} className="tnr">Spring, 2018</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[1][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[1][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[1][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[1][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[1][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][4][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[1][5][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][5][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[1][6][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[1][6][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 3<span style={{float:"right"}} className="tnr">Summer, 2018</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[2][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[2][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[2][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[2][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[2][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[2][2][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[2][3][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[2][3][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 4<span style={{float:"right"}} className="tnr">Fall, 2018</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[3][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[3][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[3][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[3][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[3][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][4][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[3][5][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][5][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[3][6][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[3][6][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 5<span style={{float:"right"}} className="tnr">Spring, 2019</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[4][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[4][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[4][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[4][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[4][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[4][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[4][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[4][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[4][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[4][4][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[4][5][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[4][5][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 6<span style={{float:"right"}} className="tnr">Summer, 2019</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[5][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[5][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[5][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[5][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[5][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[5][2][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[5][3][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[5][3][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 7<span style={{float:"right"}} className="tnr">Fall, 2019</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[6][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[6][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[6][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[6][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[6][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[6][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[6][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[6][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[6][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[6][4][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[6][5][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[6][5][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 8<span style={{float:"right"}} className="tnr">Spring, 2020</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[7][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[7][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[7][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[7][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[7][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[7][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[7][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[7][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[7][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[7][4][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[7][5][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[7][5][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 9<span style={{float:"right"}} className="tnr">Summer, 2020</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[8][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[8][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[8][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[8][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[8][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[8][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[8][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[8][3][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[8][4][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[8][4][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 10<span style={{float:"right"}} className="tnr">Fall, 2020</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className="row">
                            <div className="two-col-format-column"></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-label">Credits</span><br/></div></div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[9][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][0][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[9][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][1][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[9][2][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][2][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[9][3][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[9][4][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][4][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[9][5][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][5][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="semeser-section">
                <div className="semester-section-header tnr">Semester 11 (Last)<span style={{float:"right"}} className="tnr">Spring, 2021</span></div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="semester-course-list">
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[10][0][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][3][1]}</span><br/></div>
                        </div>
                        <div className= "row">
                            <div className="two-col-format-column"><li className="tnr">{four_year_plan[10][1][0]}</li></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[9][4][1]}</span><br/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="two-col-format-column"><span className="credit-total tnr">{four_year_plan[10][2][0]}</span></div>
                            <div className="two-col-format-column"><span className="bold-text tnr credit-number">{four_year_plan[10][2][1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FourYearPlanContent;
