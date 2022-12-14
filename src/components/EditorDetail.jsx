import React, { useEffect, useState } from 'react'
import brandsLogo from '../images/butik-icerik-logo-beyaz.png'
import { useSiteContext } from '../context/SiteContext';
import { Button, Col, Row, Label, Input } from 'reactstrap';
import db, { storage } from '../firebase';
import { deleteObject, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast';
import Loader from './Loader';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { nanoid } from 'nanoid'

const EditorDetail = () => {

    const { authors, setAuthors, editors } = useSiteContext()

    const [imgURL_, setImgURL_] = useState();
    const [tph_, setTph_] = useState(false)
    const [brandDetails, setBrandDetails] = useState();
    const [titleDetails, setTitleDetails] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [imageAsset, setImageAsset] = useState(null);
    const [msg, setMsg] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [productImgURL, setProductImgURL] = useState();
    const [title, setTitle] = useState();
    const [selectAuthor, setSelectAuthor] = useState();
    const [selectEditor, setSelectEditor] = useState();
    const [titleStart, setTitleStart] = useState();
    const [titleEnd, setTitleEnd] = useState();
    const [selectStatus, setSelectStatus] = useState();

    const addTitlePopup = () => {
        setTph_(current => !current)
    }

    const toggleHandle_ = () => {
        setTph_(current => !current)
    }

    const postHandle = () => {

    }

    const year = titleStart?.split("-")[0]
    const month = titleStart?.split("-")[1]
    const day = titleStart?.split("-")[2]
    const year_ = titleEnd?.split("-")[0]
    const month_ = titleEnd?.split("-")[1]
    const day_ = titleEnd?.split("-")[2]
    const titleStartDate_ = day + "." + month + "." + year;
    const titleEndDate_ = day_ + "." + month_ + "." + year_;

    const addNewTitle = () => {


        if (title === "" || title === undefined || title === null) {
            toast.error("Ba??l??k giriniz.");
            return;
        } else if (selectAuthor === "") {
            toast.error("Yazar se??iniz.");
            return;
        } else if (selectEditor === "") {
            toast.error("Edit??r se??iniz.");
            return;
        } else if (titleStart === null || titleStart === undefined) {
            toast.error("Ba??lang???? tarihini se??iniz.");
            return;
        } else if (titleEnd === null || titleEnd === undefined) {
            toast.error("Biti?? tarihini se??iniz.");
            return;
        } else if (titleStart > titleEnd) {
            toast.error("Ba??lag???? ve biti?? tarihini kontrol ediniz.");
            return;
        } else if (selectStatus === "") {
            toast.error("Ba??l??k durumunu se??iniz.");
            return;
        } else {

            // var author_
            // var editor_
            // var status_
            // if (selectAuthor == "0") {
            //     author_ = "Mert ??zkar"
            // } else if (selectAuthor == "1") {
            //     author_ = "Yi??itcan Derya"
            // } else if (selectAuthor == "2") {
            //     author_ = "Serhat Dalgal??dere"
            // } else {
            //     toast.error("Yazar se??iniz.")
            // }
            // if (selectEditor == "0") {
            //     editor_ = "Mert ??zkar"
            // } else if (selectEditor == "1") {
            //     editor_ = "Yi??itcan Derya"
            // } else if (selectEditor == "2") {
            //     editor_ = "Serhat Dalgal??dere"
            // } else {
            //     toast.error("Edit??r se??iniz.")
            // }
            // if (selectStatus == "0") {
            //     status_ = "Yazar"
            // } else if (selectStatus == "1") {
            //     status_ = "Edit??r"
            // } else if (selectStatus == "2") {
            //     status_ = "Marka"
            // } else if (selectStatus == "3") {
            //     status_ = "Yay??n"
            // } else {
            //     toast.error("Ba??l??k durumunu se??iniz.")
            // }
            setTph_(current => !current)
            db.collection("brands").doc(localStorage.getItem("brandId")).collection("titles").doc(nanoid()).set({
                id: nanoid(),
                title: title,
                author: JSON.parse(selectAuthor).name,
                editor: JSON.parse(selectEditor).name,
                sortStartDate: titleStart,
                sortEndDate: titleEnd,
                startDate: titleStartDate_,
                endDate: titleEndDate_,
                status: selectStatus,
            })
            db.collection("profile").doc("profile_" + JSON.parse(selectEditor).uid + "/").collection("titles/").doc(nanoid()).set({
                id: nanoid(),
                title: title,
                author: JSON.parse(selectAuthor).name,
                editor: JSON.parse(selectEditor).name,
                sortStartDate: titleStart,
                sortEndDate: titleEnd,
                startDate: titleStartDate_,
                endDate: titleEndDate_,
                status: selectStatus,
            })
            db.collection("profile").doc("profile_" + JSON.parse(selectAuthor).uid + "/").collection("titles/").doc(nanoid()).set({
                id: nanoid(),
                title: title,
                author: JSON.parse(selectAuthor).name,
                editor: JSON.parse(selectEditor).name,
                sortStartDate: titleStart,
                sortEndDate: titleEnd,
                startDate: titleStartDate_,
                endDate: titleEndDate_,
                status: selectStatus,
            })
        }
    }

    useEffect(() => {

        if (localStorage.getItem("brandId")) {
            db.collection("brands/").where("brandId", "==", localStorage.getItem("brandId")).onSnapshot(snapshot => (
                setBrandDetails(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        brandName: doc.data().brandName,
                        brandId: doc.data().brandId,
                        contentPcs: doc.data().contentPcs,
                        serviceType: doc.data().serviceType,
                        serviceStart: doc.data().serviceStart,
                        serviceEnd: doc.data().serviceEnd,
                        keyWords: doc.data().keyWords,
                        wordCount: doc.data().wordCount,
                        imgURL: doc.data().imgURL
                    }
                )
                ))
            ))
        }
    }, [])

    useEffect(() => {


        if (localStorage.getItem("brandId")) {
            console.log(localStorage.getItem("brandId"))
            db.collection("brands/").doc(localStorage.getItem("brandId")).collection("titles").onSnapshot(snapshot => (
                setTitleDetails(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        title: doc.data().title,
                        author: doc.data().author,
                        editor: doc.data().editor,
                        status: doc.data().status,
                        startDate: doc.data().startDate,
                        endDate: doc.data().endDate
                    }
                )
                ))
            ))
        }
    }, [])



    const uploadLogo = () => {
        db.collection("brands/").doc(localStorage.getItem("brandId")).update(
            {
                imgURL: imgURL_
            }
        )
    }

    const deleteLogo = () => {
        deleteObject(ref(storage, brandDetails && brandDetails[0].imgURL));
        db.collection("brands/").doc(localStorage.getItem("brandId")).update(
            {
                imgURL: ""
            }
        )

    }

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `logos/${localStorage.getItem("brandId")}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            console.log(error);
            setFields(true);
            setMsg('Error while uploading : Try Again?????????????');
            setAlertStatus('danger');
            setTimeout(() => {
                setFields(false);
                setIsLoading(false);
            }, 4000)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                setImageAsset(downloadURL);
                setProductImgURL(downloadURL);
                console.log(downloadURL)
                setIsLoading(false);
                setFields(true);
                setImgURL_(downloadURL)
                toast.success('Image uploaded succesfully????');
                setAlertStatus("success");
                setTimeout(() => {
                    setFields(false);
                }, 4000);

            })
        });
    }

    const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
            setImageAsset(null);
            setIsLoading(false);
            setFields(true);
            setMsg('Image deleted succesfully????????');
            setTimeout(() => {
                setFields(false);
            }, 4000);
        })
    }


    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <p>Edit??r ad??</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Al??nan Hizmet</p>
                                <h6 className="mb-0">??r??n ????eri??i</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Ayl??k ????erik Say??s??</p>
                                <h6 className="mb-0"> {brandDetails && brandDetails[0]?.contentPcs} </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Toplam ????erik Say??s??</p>
                                <h6 className="mb-0">16</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-5">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Kelime Say??s??</p>
                                <h6 className="mb-0"> {brandDetails && brandDetails[0]?.wordCount} </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Anahtar Kelimeler</p>
                                <h6 className="mb-0"> {brandDetails && brandDetails[0]?.keyWords} </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">Hizmet Ba??lang????/Biti??</p>
                                <h6 className="mb-0"> {brandDetails && brandDetails[0]?.serviceStart} / {brandDetails && brandDetails[0]?.serviceEnd}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <div className="ms-3">
                                <p className="mb-2">????erik Adet Fiyat??</p>
                                <h6 className="mb-0">180???</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary text-center rounded p-4">
                    <Row>
                        <Col lg="6" className="d-flex align-items-center justify-content-between align-self-center">
                            <h6 className="mb-0">Ekim Ay?? Ba??l??klar??</h6>
                        </Col>
                        <Col lg="6" className='text-end'>
                            <button type="button" className="btn btn-primary m-2" onClick={addTitlePopup}>Ba??l??k Ekle <b>+</b></button>
                        </Col>
                        {tph_ && <div className="popup-box">
                            <div className="box">
                                <span className="close-icon" onClick={toggleHandle_}>x</span>
                                <Row className='mb-3'>
                                    <Col className='align-self-center text-center'>
                                        <h3 className='mb-0'>Ba??l??k Ekle</h3>
                                        <hr />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col xl="4" className='align-self-center text-start'>
                                        <Label className='mb-0'>Ba??l??k:</Label>
                                    </Col>
                                    <Col xl="8">
                                        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col xl="4" className='align-self-center text-start'>
                                        <Label className='mb-0'>Yazar:</Label>
                                    </Col>
                                    <Col xl="8">
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => setSelectAuthor(e.target.value)}>
                                            <option value={""} >Yazar Se??iniz</option>
                                            {authors?.map((authors, index) => (
                                                <option value={JSON.stringify(authors)}>{authors.name}</option>
                                            ))}
                                        </select>
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col xl="4" className='align-self-center text-start'>
                                        <Label className='mb-0'>Edit??r:</Label>
                                    </Col>
                                    <Col xl="8">
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => setSelectEditor(e.target.value)}>
                                            <option value={""} >Edit??r Se??iniz</option>
                                            {editors?.map((editor, index) => (
                                                <option value={JSON.stringify(editor)}>{editor.name}</option>
                                            ))}
                                        </select>
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col xl="4" className='align-self-center text-start'>
                                        <Label className='mb-0'>Ba??l??k Ba??lang??c??:</Label>
                                    </Col>
                                    <Col xl="8">
                                        <Input type="date" value={titleStart} onChange={(e) => setTitleStart(e.target.value)}></Input>
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col xl="4" className='align-self-center text-start'>
                                        <Label className='mb-0'>Ba??l??k Biti??i:</Label>
                                    </Col>
                                    <Col xl="8">
                                        <Input type="date" value={titleEnd} onChange={(e) => setTitleEnd(e.target.value)}></Input>
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col xl="4" className='align-self-center text-start'>
                                        <Label className='mb-0'>Ba??l??k Durumu:</Label>
                                    </Col>
                                    <Col xl="8">
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => setSelectStatus(e.target.value)}>
                                            <option value={""} >Durum Se??iniz</option>
                                            <option value={"Yazar"}>Yazar</option>
                                            <option value={"Edit??r"}>Edit??r</option>
                                            <option value={"Marka"}>Marka</option>
                                            <option value={"Yay??n"}>Yay??n</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center'>
                                    <Col xl="6" className='text-center'>
                                        <button type="button" className="btn btn-primary m-2" onClick={addNewTitle}>Yeni Ba??l??k Ekle</button>
                                    </Col>
                                </Row>
                            </div>
                        </div>}
                    </Row>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">Ba??l??k Ad??</th>
                                    <th scope="col">Yazar</th>
                                    <th scope="col">Edit??r</th>
                                    <th scope="col">Ba??lang???? Tarihi</th>
                                    <th scope="col">Biti?? Tarihi</th>
                                    <th scope="col">Durum</th>
                                </tr>
                            </thead>
                            <tbody>
                                {titleDetails?.map((title) => (
                                    <tr key={title.id} >
                                        <td onClick={postHandle} className="pointer">{title.title}</td>
                                        <td>{title.author}</td>
                                        <td>{title.editor}</td>
                                        <td>{title.startDate}</td>
                                        <td>{title.endDate}</td>
                                        <td>{title.status}</td>
                                    </tr>
                                    // {titleDetail}
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorDetail