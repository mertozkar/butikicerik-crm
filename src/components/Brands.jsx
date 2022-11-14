import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Col, Row, InputGroup, Input, Label } from 'reactstrap';
import { nanoid } from 'nanoid'
import db from '../firebase';
import { useSiteContext } from '../context/SiteContext';
import { Link } from 'react-router-dom';
import BrandsDetail from './BrandsDetail';
import defaultLogo from '../images/butik-icerik-logo-beyaz.png'


const Brands = () => {

    const { brands, patSearch, setPatSearch } = useSiteContext()

    const [tph_, setTph_] = useState(false)
    const [brandName, setBrandName] = useState()
    const [contentPcs, setContentPcs] = useState()
    const [wordCount, setWordCount] = useState()
    const [keyWords, setKeyWords] = useState()
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
        } else if (wordCount <= 0 || wordCount === undefined || wordCount === null) {
            toast.error("İçerik adedini giriniz.");
            return;
        } else if (serviceType === "") {
            toast.error("Hizmet tipiniz seçiniz.");
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
                setTph_(current => !current)
                db.collection("brands/").doc(nanoid()).set({
                    brandId: nanoid(),
                    brandName: brandName,
                    contentPcs: contentPcs,
                    wordCount: wordCount,
                    keyWords: keyWords,
                    serviceType: "Blog",
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd
                })
            } else if (serviceType === 1) {
                setServiceType("Kategori");
                setTph_(current => !current)
                db.collection("brands/").doc(nanoid()).set({
                    brandId: nanoid(),
                    brandName: brandName,
                    contentPcs: contentPcs,
                    wordCount: wordCount,
                    keyWords: keyWords,
                    serviceType: "Kategori",
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd
                })
            }
            else {
                setServiceType("Ürün");
                setTph_(current => !current)
                db.collection("brands/").doc(nanoid()).set({
                    brandId: nanoid(),
                    brandName: brandName,
                    contentPcs: contentPcs,
                    wordCount: wordCount,
                    keyWords: keyWords,
                    serviceType: "Ürün",
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd
                })
            }
        }
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
                                <select className="form-select" aria-label="Default select example" onChange={(e) => setServiceType(e.target.value)}>
                                    <option value={""} >Marka Adı</option>
                                    <option value={"0"}>Blog</option>
                                    <option value={"1"}>Kategori</option>
                                    <option value={"2"}>Ürün</option>
                                </select>
                            </Col>
                        </Row>
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
                                <Label className='mb-0'>Kelime Sayısı:</Label>
                            </Col>
                            <Col xl="8">
                                <Input type="number" value={wordCount} onChange={(e) => setWordCount(e.target.value)}></Input>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xl="4" className='align-self-center'>
                                <Label className='mb-0'>Anahtar Kelimeler:</Label>
                            </Col>
                            <Col xl="8">
                                <Input type="textarea" value={keyWords} onChange={(e) => setKeyWords(e.target.value)}></Input>
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
                    <Col lg="4" xl="4">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4 mt-5">
                            <img src={brands.imgURL == "" ? defaultLogo : brands.imgURL} width="auto" height="25" />
                            <div className="ms-3">
                                <Link to={"/brand-details"} onClick={() => localStorage.setItem("brandId", brands.brandId)}><h6 className="mb-2">{brands.brandName}</h6></Link>
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