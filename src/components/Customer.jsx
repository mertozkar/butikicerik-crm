import React from 'react'
import { useSiteContext } from '../context/SiteContext';

const Customer = () => {

    const { brands } = useSiteContext();

    return (
        < div className="container-fluid pt-4 px-4" >
            <div className="row g-4 mb-5">
                <h2>Marka Adı</h2>

                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <div className="ms-3">
                            <p className="mb-2">Anahtar Kelimeler</p>
                            <h6 className="mb-0">x,y,z</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <div className="ms-3">
                            <p className="mb-2">Hizmet Adı</p>
                            <h6 className="mb-0">Kategori içeriği vb.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <div className="ms-3">
                            <p className="mb-2">Kelime Sayısı / Aylık İçerik Adedi</p>
                            <h6 className="mb-0">300 / 8</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <div className="ms-3">
                            <p className="mb-2">Hizmet Başlangıcı-Hizmet Bitişi</p>
                            <h6 className="mb-0">12.12.2022-11.11.2023</h6>
                        </div>
                    </div>
                </div>
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
                        {brands.map(brand => (
                            <tbody>
                                <tr>
                                    <td>{brand.brandName}</td>
                                    <td> {brand.serviceStart} </td>
                                    <td>{brand.serviceEnd}</td>
                                    <td>Yazarda</td>

                                    {/* <td> <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne" onClick={() => setVisibleDetail(current => !current)}>
                                    Detail
                                </button></td> */}
                                </tr>
                                {/* {visibleDetail &&
                                <tr>
                                    <td colSpan={8}>
                                        <div className="bg-secondary rounded h-100 mb-0">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item bg-transparent">
                                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                                                <thead>
                                                                    <tr className="text-white">
                                                                        <th scope="col">Başlık</th>
                                                                        <th scope="col">Yazar</th>
                                                                        <th scope="col">Editör</th>
                                                                        <th scope="col">Başlangıç Tarihi</th>
                                                                        <th scope="col">Bitiş Tarihi</th>
                                                                        <th scope="col">Durumu</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Başlık1</td>
                                                                        <td>Yazar1</td>
                                                                        <td>Editör1</td>
                                                                        <td>22.10.2022</td>
                                                                        <td>29.10.2022</td>
                                                                        <td style={{ fontWeight: 'bold' }}>Yazarda</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Başlık2</td>
                                                                        <td>Yazar2</td>
                                                                        <td>Editör2</td>
                                                                        <td>22.11.2022</td>
                                                                        <td>29.11.2022</td>
                                                                        <td style={{ color: 'yellow', fontWeight: 'bold' }}>Editörde</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Başlık3</td>
                                                                        <td>Yazar3</td>
                                                                        <td>Editör3</td>
                                                                        <td>22.12.2022</td>
                                                                        <td >29.12.2022</td>
                                                                        <td style={{ color: 'green', fontWeight: 'bold' }}>Markada</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            } */}
                            </tbody>
                        ))}
                    </table>

                </div>
            </div>
            <div className="container-fluid pt-4 px-4">
            </div>
        </div >
    )
}

export default Customer