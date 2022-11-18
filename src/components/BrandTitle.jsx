import React, { useState } from 'react'
import { Button, Col, Row } from 'reactstrap';
import db from '../firebase';

const BrandTitle = ({ title, id, author, editor, startDate, endDate, status }) => {

    const [tph, setTph] = useState(false);
    const removeTitleFromDb = (id) => {
        setTph(current => !current)
    }

    const toggleHandle = () => {
        setTph(current => !current)
    }

    const removeTitleFromDb_ = (id) => {
        console.log(localStorage.getItem("brandId") + " " + id + " ")
        db.collection("brands").doc(localStorage.getItem("brandId")).collection("titles").doc(id).delete();
        setTph(current => !current)
    }

    return (
        <>
            <tr key={id} className="brand-title-table">
                <td>{title}</td>
                <td>{author}</td>
                <td>{editor}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{status}</td>
                <td><button type="button" class="btn btn-danger m-2" onClick={(e) => removeTitleFromDb(id)}>Sil</button></td>
                <td><button type="button" class="btn btn-warning m-2">Güncelle</button></td>
                {tph && <div className="popup-box">
                    <div className="box">
                        <span className="close-icon" onClick={toggleHandle}>x</span>
                        <Row className="product-name"> Başlığı silmek istediğinize emin misiniz?</Row>
                        <Row>
                            <Col>
                                <Button
                                    color="success"
                                    outline
                                    className="float-end"
                                    onClick={(e) => removeTitleFromDb_(id)}
                                >
                                    Sil
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    color="danger"
                                    outline
                                    onClick={toggleHandle}
                                >
                                    İptal
                                </Button>
                            </Col>
                        </Row>

                    </div>
                </div>}
            </tr>
        </>
    )
}

export default BrandTitle