import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div id="homeArea1">
                    <div id="partnersBox">
                        <div id="linefill"></div>


                        <h1 id="partnersHeading">Our Partners </h1>

                        <div id="linefill"></div>
                        <button className="collapsible" id="topBox">Real Hope for Haiti</button>
                        <div className="content">
                            <p>Real Hope for Haiti was founded in 2006, by the Zachary family. This facility is located in Cazale, a remote town in Haiti, and is the sole healthcare provider to thousands of local Haitians. Real Hope for Haiti runs a Rescue Center, which serves 24-hour medical care to about 70-80 severely unwell children full-time, with the aim to get them “back on their feet”. The primary medical issue these young children face is severe malnutrition, and all of the complications and conditions that follow. Real Hope for Haiti offers one of the few in-patient programs, and also provides education for the patient’s parent/guardian. Real Hope for Haiti also operates an outpatient clinic, which provides services such as health care education, preventative medicine, prenatal care, primary care, minor surgeries/wound care, and limited emergency care and lab services. Both the Rescue Center and the Outpatient Clinic employ numerous Haitian staff. In 2010, RHFH began caring for those affected by the devastating Cholera outbreak in Haiti, and has served thousands of patients over the years. Real Hope for Haiti is run by sisters Licia Betor, who is the director of the Rescue Center, and Lori Moise, the director of the Clinic. </p>
                        </div>
                        <button className="collapsible">Haiti Design Co</button>
                        <div className="content">
                            <p>Haiti Design Co was founded in 2014 by a married couple, Chandler and Josh Busby, and is located in Port au Prince. The goal of Haiti Design Co is to provide training and jobs through design. HDC trains Haitians in many types of artisanship, including sewing, metal work, weaving, beadwork, tailoring, leatherwork, and jewelry making. Through this social enterprise, HDC provides stable jobs to vulnerable individuals. Not only does HDC incorporate vocational training, but also provides their team with business management training, and leadership development, so these individuals may rise up in their community and pass on their knowledge/training to others in the community. To serve the community, HDC also is raising funds for their Wellness Rooftop - an oasis in their community, which would provide a rooftop garden, and provide services such as community meetings, yoga/fitness classes, nutritional counseling, business education, and other seminars.</p>
                        </div>
                        <button className="collapsible">Respire</button>
                        <div className="content">
                            <p>Respire was founded in 2011 by Megan Boudreaux, a young college graduate with the dream to “encourage, educate, and empower restaveks, orphans, and vulnerable children”. Restaveks are young child slaves that are removed from their family, and work as domestic servants in a home. Restaveks, often as young 4 years old, perform all of the household chores, and are often abused and withheld from any education. Respire serves the community of Gressier, and has a school that educates vulnerable children/Restaveks, from ages Pre-K through high school. Respire also has raised community awareness in Gressier, on the issue of Restaveks, and hopes to eradicate this devastating issue through education. The Respire School also serves the community, through adult literacy programs, and English classes. Respire also provides medical care through a clinic, which provides dental care, occupational therapy, pharmaceutical care, malnutrition care, and other health issues.</p>
                        </div>
                        <button className="collapsible">Heartline</button>
                        <div className="content">
                            <p>Heartline Ministries was started in 2000, located in Port au Prince, and focused on addressing the leading issues causing Haiti’s orphanhood epidemic. Heartline holistically approaches this issue, and has an Educational Center, where young individuals learn trades and vocational skills to enable them to earn a living, as well as a bakery, where young Haitians have access to vocational training and employment. Heartline also offers a full-maternity center, complete with prenatal classes, Haitian employed nurses and midwives, labor and delivery services, breastfeeding support, postnatal/neonatal checkups, and childhood development education. Giving birth in Haiti can be quite dangerous, due to lack of healthcare, facilities, and education. Heartline is run by a married couple, Troy and Tara Livesay, who serve as co-directors. Tara Livesay is also a certified midwife in the Maternity Center.</p>
                        </div>
                        <button className="collapsible">Second Mile</button>
                        <div className="content">
                            <p>Second Mile Haiti is a nonprofit organization, located in Northern Haiti, and is run by a young married couple, Jenn Schenk and Amy Syres. Second Mile Haiti meets immediate needs of their community, by treating children with malnutrition, and providing inpatient and rehabilitation care for these individuals. Second Mile also aims to invest in women, by providing education classes, covering issues such as health, nutrition, business, gardening, and literacy. Second Mile’s newest initiative is the Strong Start Maternity Center. The hope is that education and medical care for mothers from the very beginning of pregnancy will prevent many children from becoming malnutrition patients years later. Prenatal medical care is not readily available in Haiti, due to limited facilities and high costs. Giving birth in Haiti is extremely dangerous, and Haiti has a very high maternal and infant mortality rate. The Strong Start Maternity Center will provide prenatal care and education, labor and delivery services, postpartum care, breastfeeding support, infant/childhood education services, and check ups. </p>
                        </div>
                        <button className="collapsible">Creole Inc</button>
                        <div className="content">
                            <p>Creole Inc operates in Cap Haitien, Haiti, with the aim to bring about sustainable community change through agriculture initiatives. These programs include terracing, gardening, fish farming, and coffee production. Not only does Creole Inc. hope to create jobs, but also provide sustainable and nutritional food sources, and land restoration. Creole Inc. is run by the director, Dave Wilkinson. </p>
                        </div>
                    </div>


                    {/* <div id="partnersBox">
                <ul>
                <li><a class="partnersList" href="realhope">Real Hope for Haiti</a></li>
                <li><a class="partnersList" href="haitiDesign">Haiti Design co-op</a></li>
                <li><a class="partnersList" href="respire">Respire</a></li>
                <li><a class="partnersList" href="heartline">Heartline</a></li>
                <li><a class="partnersList" href="secondline">Second Mile</a></li>
                <li><a class="partnersList" href="creoleinc">Creole Inc</a></li>
                <li><a class="partnersList" href="corriganclay">Corrigan Clay</a></li>
                </ul>
            </div> */}
                </div>

            </Fragment>
        );
    }
}