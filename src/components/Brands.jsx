import React, { useState } from 'react'
import { Col, Row, InputGroup, Input } from 'reactstrap';


const Brands = () => {

    const [patSearch, setPatSearch] = useState('');

    const [brandsInfo, setBrandsInfo] = useState([
        { id: 123456, title: "title1", pcs: 5 },
        { id: 12663, title: "title2", pcs: 3 },
        { id: 121233, title: "title3", pcs: 12 },
        { id: 123653, title: "title4", pcs: 52 },

    ])
    return (
        <>
         <Row xs="1" className="search-bar mt-5">
                    <Col lg="6">
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

                </Row>
            <Row>
                {brandsInfo.filter((brand) => brand.title.toLowerCase().includes(patSearch)).map((brand, index) => (
                    <Col>
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4 mt-5">
                            <i className="fa fa-chart-line fa-3x text-primary">logo</i>
                            <div className="ms-3">
                                <h6 className="mb-2">{brand.title}</h6>
                                <p className="mb-0">{brand.pcs} Blog içeriği</p>
                                <p className="mb-0">3 Ürün içeriği</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Brands