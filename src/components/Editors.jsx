import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Col, Row, InputGroup, Input, Label } from 'reactstrap';
import { nanoid } from 'nanoid'
import db from '../firebase';
import { useSiteContext } from '../context/SiteContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Editors = () => {
    const { patSearch, setPatSearch, editors } = useSiteContext()

    const navigate = useNavigate();

    const singUpHandle = () => {
        navigate("/signup", { replace: true })
    }



    return (
        <>
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
                <Col lg="6" className='text-end'>
                    <button type="button" className="btn btn-primary m-2" onClick={singUpHandle}>Yeni Editör <b>+</b></button>
                </Col>
            </Row>
            <Row>
                {editors.filter((editors) => editors.email.toLowerCase().includes(patSearch)).map((editors, index) => (
                    <Col lg="4" md="6" sm="6" xs="6" key={editors.uid}>
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4 mt-5">
                            <Link to={"/editor-details"} onClick={() => localStorage.setItem("editorId", editors.uid)}><i className="fa fa-chart-line fa-3x text-primary">{editors.name}</i></Link>
                            <div className="ms-3">
                                <h6 className="mb-2">{editors.email}</h6>
                                <h6 className="mb-2">{editors.phone}</h6>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Editors