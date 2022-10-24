import React, { useEffect, useState } from 'react'
import brandsLogo from '../images/butik-icerik-logo-beyaz.png'
import { useSiteContext } from '../context/SiteContext';
import { Button, Col, Row } from 'reactstrap';
import db, { storage } from '../firebase';
import { deleteObject, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast';
import Loader from './Loader';
import { MdCloudUpload, MdDelete } from 'react-icons/md'



const BrandsDetail = () => {

    const [imgURL_, setImgURL_] = useState();
    const [brandDetails, setBrandDetails] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [imageAsset, setImageAsset] = useState(null);
    const [msg, setMsg] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [productImgURL, setProductImgURL] = useState()

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
            setMsg('Error while uploading : Try Again🙇‍♂️');
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
                toast.success('Image uploaded succesfully😎');
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
            setMsg('Image deleted succesfully🚮🗑');
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
                            <div className="ms-3">
                                {brandDetails && brandDetails[0].imgURL === "" ? <div> {isLoading ? <Loader /> : (<>
                                    {!imageAsset ? (<>
                                        <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                            <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2'>
                                                <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                                                <p className='text-gray-500 text-xl'> Görsel yükle</p>
                                            </div>
                                            <input type="file" name="uploadimage" accept='image/*' onChange={uploadImage} className='w-0 h-0 ' />
                                        </label>
                                    </>) :
                                        (<> <div className='relative h-20 '>
                                            <img src={imageAsset} alt="uploaded image" style={{ width: 200 }} />
                                            <button type='button' className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all' onClick={deleteImage}>
                                                <MdDelete className='text-white' />
                                            </button>
                                        </div>
                                        </>)}
                                </>)}
                                    <Button onClick={uploadLogo} > Logoyu Kaydet </Button></div> : <div><img src={brandDetails && brandDetails[0].imgURL} width="250" /> <Button onClick={deleteLogo}> Logoyu sil </Button></div>}
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
                                <h6 className="mb-0"> {brandDetails && brandDetails[0]?.contentPcs} </h6>
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
                                <p className="mb-2">Hizmet Başlangıç/Bitiş</p>
                                <h6 className="mb-0"> {brandDetails && brandDetails[0]?.serviceStart} / {brandDetails && brandDetails[0]?.serviceEnd}</h6>
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