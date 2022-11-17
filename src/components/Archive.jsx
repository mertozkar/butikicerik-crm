import React, { useState } from 'react'
import { Row, Col, InputGroup, Input } from 'reactstrap'
import { useSiteContext } from '../context/SiteContext'

const Archive = () => {

    const { patSearch, setPatSearch, dummyContents } = useSiteContext()

    const [date_value, setDate_value] = useState("0");




    return (
        < div className="container-fluid pt-4 px-4" >
            <div className="row g-4 mb-5">
                <h2>Arşiv</h2>

                <Row xs="1" className="search-bar mt-5">
                    <Col lg="6" className='align-self-center'>
                        <InputGroup>
                            <Input
                                placeholder="Ara"
                                type="search"
                                value={patSearch.toLowerCase()}
                                autoFocus="autoFocus"
                                onChange={(e) => setPatSearch(e.target.value)}
                                className="border border-primary"
                            />
                        </InputGroup>
                    </Col>
                    <Col lg="6" className='align-self-center'>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setDate_value(e.target.value)}>
                            <option value={"0"} >Statü</option>
                            <option value={"Yazarda"}>Yazarda</option>
                            <option value={"Editörde"}>Editörde</option>
                            <option value={"Teslim edildi"}>Teslim edildi</option>
                        </select>
                    </Col>

                </Row>

            </div>
            <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Eylül İçerikler</h6>
                </div>
                <div className="table-responsive">

                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <thead>
                            <tr className="text-white">
                                <th scope="col">İçerik Başlığı</th>
                                <th scope="col">Hizmet Başlangıç Tarihi</th>
                                <th scope="col">Hizmet Bitiiş  Tarihi</th>
                                <th scope="col">Durumu</th>
                            </tr>
                        </thead>
                        {date_value == "0" && dummyContents.filter((content) => content.title.toLowerCase().includes(patSearch)).map((content, index) =>
                            <tbody key={index}>
                                <tr>
                                    <td>{content.title}</td>
                                    <td>{content.startDate}</td>
                                    <td>{content.endDate}</td>
                                    <td>{content.status}</td>
                                </tr>
                            </tbody>
                        )}
                        {date_value != "0" && dummyContents.filter((content) => content.title.toLowerCase().includes(patSearch)).filter(content => content.status == date_value).map((content, index) =>
                            <tbody key={index}>
                                <tr>
                                    <td>{content.title}</td>
                                    <td>{content.startDate}</td>
                                    <td>{content.endDate}</td>
                                    <td>{content.status}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
            <div className="container-fluid pt-4 px-4">
            </div>
        </div >
    )
}

export default Archive