import React from 'react'

const BrandTitle = () => {
    return (
        <tr key={title.id} className="brand-title-table">
            <td>{title.title}</td>
            <td>{title.author}</td>
            <td>{title.editor}</td>
            <td>{title.startDate}</td>
            <td>{title.endDate}</td>
            <td>{title.status}</td>
            <td><button type="button" class="btn btn-danger m-2" onClick={(e) => removeTitleFromDb(title.id)}>Sil</button></td>
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
                                onClick={(e) => removeTitleFromDb_(titleId)}
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
            <td><button type="button" class="btn btn-warning m-2">Güncelle</button></td>
        </tr>
    )
}

export default BrandTitle