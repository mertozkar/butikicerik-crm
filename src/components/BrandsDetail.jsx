import React from 'react'
import brandsLogo from '../images/butik-icerik-logo-beyaz.png'
import { useSiteContext } from '../context/SiteContext';
import { Col, Row } from 'reactstrap';

const BrandsDetail = () => {


    const { brandId } = useSiteContext()
    console.log(brandId)
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <img src={brandsLogo} className="mb-2" style={{ width: 200 }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Alınan Hizmet</p>
                                <h6 className="mb-0">Ürün İçeriği</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Aylık İçerik Sayısı</p>
                                <h6 className="mb-0">4</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Toplam İçerik Sayısı</p>
                                <h6 className="mb-0">16</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-5">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Kelime Sayısı</p>
                                <h6 className="mb-0">300</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Anahtar Kelimeler</p>
                                <h6 className="mb-0">kelime, kelime, kelime, kelime, kelime</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Hizmet Başlangıç/Bitiş</p>
                                <h6 className="mb-0">02.02.2022 / 02.02.2023</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">İçerik Adet Fiyatı</p>
                                <h6 className="mb-0">180₺</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary text-center rounded p-4">
                    <Row>
                        <Col lg="6" className="d-flex align-items-center justify-content-between align-self-center">
                            <h6 className="mb-0">Ekim Ayı Başlıkları</h6>
                        </Col>
                        <Col lg="6" className='text-end'>
                            <button type="button" className="btn btn-primary m-2">Yeni Marka <b>+</b></button>
                        </Col>
                    </Row>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">Başlık Adı</th>
                                    <th scope="col">Yazar</th>
                                    <th scope="col">Editör</th>
                                    <th scope="col">Durum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Başlık 1</td>
                                    <td>Yazar 1</td>
                                    <td>Editör 1</td>
                                    <td>Yazarda</td>
                                </tr>
                                <tr>
                                    <td>Başlık 1</td>
                                    <td>Yazar 1</td>
                                    <td>Editör 1</td>
                                    <td>Yazarda</td>
                                </tr>
                                <tr>
                                    <td>Başlık 1</td>
                                    <td>Yazar 1</td>
                                    <td>Editör 1</td>
                                    <td>Yazarda</td>
                                </tr>
                                <tr>
                                    <td>Başlık 1</td>
                                    <td>Yazar 1</td>
                                    <td>Editör 1</td>
                                    <td>Yazarda</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandsDetail