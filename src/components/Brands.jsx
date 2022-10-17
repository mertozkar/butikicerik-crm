import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Col, Row, InputGroup, Input, Label } from 'reactstrap';
import { nanoid } from 'nanoid'
import db from '../firebase';
import { useSiteContext } from '../context/SiteContext';


const Brands = () => {

    const { brands, patSearch, setPatSearch } = useSiteContext()

    const [tph_, setTph_] = useState(false)
    const [brandName, setBrandName] = useState()
    const [contentPcs, setContentPcs] = useState()
    const [serviceType, setServiceType] = useState()
    const [serviceStart, setServiceStart] = useState()
    const [serviceEnd, setServiceEnd] = useState()

    const toggleHandle_ = () => {
        setTph_(current => !current)
    }

    const openNewBrandPopup = () => {
        setTph_(current => !current)
    }
    const addNewBrand = () => {
        if (brandName === "" || brandName === undefined || brandName === null) {
            toast.error("Marka adını giriniz.");
            return;
        } else if (contentPcs <= 0 || brandName === undefined || brandName === null) {
            toast.error("İçerik adedini giriniz.");
            return;
        } else if (serviceType === "") {
            toast.error("Hzmet tipiniz seçiniz.");
            return;
        } else if (serviceStart === null || serviceStart === undefined) {
            toast.error("Hizmet başlangıç tarihini seçiniz.");
            return;
        } else if (serviceEnd === null || serviceEnd === undefined) {
            toast.error("Hizmet bitiş tarihini seçiniz.");
            return;
        } else if (serviceStart > serviceEnd) {
            toast.error("Başlagıç ve bitiş tarihini kontrol ediniz.");
            return;
        } else {
            if (serviceType === 0) {
                setServiceType("Blog");
                console.log("id: " + nanoid() + ", brandName: " + brandName + ", contentPcs: " + contentPcs + ", serviceType: " + serviceType + " , serviceStart: " + serviceStart + ", serviceEnd: " + serviceEnd);
                setTph_(current => !current)
                db.collection("brands/").doc(nanoid()).set({
                    brandName: brandName,
                    contentPcs: contentPcs,
                    serviceType: "Blog",
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd
                })
            } else if (serviceType === 1) {
                setServiceType("Kategori");
                console.log("id: " + nanoid() + ", brandName: " + brandName + ", contentPcs: " + contentPcs + ", serviceType: " + serviceType + " , serviceStart: " + serviceStart + ", serviceEnd: " + serviceEnd);
                setTph_(current => !current)
                db.collection("brands/").doc(nanoid()).set({
                    brandName: brandName,
                    contentPcs: contentPcs,
                    serviceType: "Kategori",
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd
                })
            }
            else {
                setServiceType("Ürün");
                console.log("id: " + nanoid() + ", brandName: " + brandName + ", contentPcs: " + contentPcs + ", serviceType: " + serviceType + " , serviceStart: " + serviceStart + ", serviceEnd: " + serviceEnd);
                setTph_(current => !current)
                db.collection("brands/").doc(nanoid()).set({
                    brandName: brandName,
                    contentPcs: contentPcs,
                    serviceType: "Ürün",
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd
                })
            }
        }
    }

    const [brandsInfo, setBrandsInfo] = useState([
        { id: 123456, title: "title1", pcs: 5 },
        { id: 12663, title: "title2", pcs: 3 },
        { id: 121233, title: "title3", pcs: 12 },
        { id: 123653, title: "title4", pcs: 52 },

    ])
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
                    <button type="button" className="btn btn-primary m-2" onClick={openNewBrandPopup}>Yeni Marka <b>+</b></button>
                </Col>
                {tph_ && <div className="popup-box">
                    <div className="box">
                        <span className="close-icon" onClick={toggleHandle_}>x</span>
                        <Row className='mb-3'>
                            <Col xl="4" className='align-self-center'>
                                <Label className='mb-0'>Marka Adı:</Label>
                            </Col>
                            <Col xl="8">
                                <Input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)}></Input>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xl="4" className='align-self-center'>
                                <Label className='mb-0'>İçerik Adedi:</Label>
                            </Col>
                            <Col xl="8">
                                <Input type="number" value={contentPcs} onChange={(e) => setContentPcs(e.target.value)}></Input>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xl="4" className='align-self-center'>
                                <Label className='mb-0'>Hizmet Türü:</Label>
                            </Col>
                            <Col xl="8">
                                <select className="form-select" aria-label="Default select example" onChange={(e) => setServiceType(e.target.value)}>
                                    <option value={""} >Hizmet Türü</option>
                                    <option value={"0"}>Blog</option>
                                    <option value={"1"}>Kategori</option>
                                    <option value={"2"}>Ürün</option>
                                </select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xl="4" className='align-self-center'>
                                <Label className='mb-0'>Hizmet Başlangıcı:</Label>
                            </Col>
                            <Col xl="8">
                                <Input type="date" value={serviceStart} onChange={(e) => setServiceStart(e.target.value)}></Input>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xl="4" className='align-self-center'>
                                <Label className='mb-0'>Hizmet Bitişi:</Label>
                            </Col>
                            <Col xl="8">
                                <Input type="date" value={serviceEnd} onChange={(e) => setServiceEnd(e.target.value)}></Input>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xl="6" className='text-center'>
                                <button type="button" className="btn btn-primary m-2" onClick={addNewBrand}>Yeni Marka Ekle</button>
                            </Col>
                        </Row>

                    </div>
                </div>}

            </Row>
            <Row>
                {brands.filter((brands) => brands.brandName.toLowerCase().includes(patSearch)).map((brands, index) => (
                    <Col>
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4 mt-5">
                            <i className="fa fa-chart-line fa-3x text-primary">logo</i>
                            <div className="ms-3">
                                <h6 className="mb-2">{brands.brandName}</h6>
                                <p className="mb-0">{brands.contentPcs} {brands.serviceType} içeriği</p>
                                <p className="mb-0">{brands.serviceStart}</p>
                                <p className="mb-0">{brands.serviceEnd}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Brands