import React, { useState } from 'react'
import { Input } from 'reactstrap'
import 'https://code.jquery.com/jquery-3.4.1.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js';

const AdminHome = () => {

    const [visibleDetail, setVisibleDetail] = useState(false)

    return (
        <div className="container-fluid pt-4 px-4">
            <div class="row g-4 mb-5">
                <div class="col-sm-6 col-xl-3">
                    <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-line fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">300 Kelime Türkçe İçerik</p>
                            <h6 class="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-bar fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">300 Kelime İngilizce İçerik</p>
                            <h6 class="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-area fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">600 Kelime Türkçe İçerik</p>
                            <h6 class="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-area fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">600 Kelime İngilizce İçerik</p>
                            <h6 class="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Marka Bilgileri</h6>
                </div>
                <div className="table-responsive">
                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <thead>
                            <tr className="text-white">
                                <th scope="col">Marka Adı</th>
                                <th scope="col">Hizmet Adı</th>
                                <th scope="col">Aylık Adet</th>
                                <th scope="col">Kelime Sayısı</th>
                                <th scope="col">Anahtar Kelimeler</th>
                                <th scope="col">Hizmet Başlangıç Tarihi</th>
                                <th scope="col">Hizmet Bitiiş  Tarihi</th>
                                <th scope="col">Detaylar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>İyibize</td>
                                <td>Blog İçeriği</td>
                                <td>4</td>
                                <td>300</td>
                                <td>anahtar kelime1, anahtar kelime2, anahtar kelime3</td>
                                <td>14.10.2022</td>
                                <td>14.10.2023</td>
                                <td> <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne" onClick={() => setVisibleDetail(current => !current)}>
                                    Detail
                                </button></td>
                            </tr>
                            { visibleDetail &&
                                <tr>
                                <td colSpan={8}>
                                    <div class="bg-secondary rounded h-100 p-4">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item bg-transparent">
                                                <div id="collapseOne" class="accordion-collapse collapse show"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        Gubergren justo eos magna eirmod lorem magna, amet dolores ipsum sadipscing ipsum consetetur invidunt et clita diam, vero dolor dolor est eirmod. Rebum accusam amet ipsum et. Et et lorem sanctus amet eos eos elitr ea, sanctus magna et et sed eos sit takimata sadipscing, dolor rebum sed stet vero.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr> 
                            }
                            <tr>
                                <td>İyibize</td>
                                <td>Blog İçeriği</td>
                                <td>4</td>
                                <td>300</td>
                                <td>anahtar kelime1, anahtar kelime2, anahtar kelime3</td>
                                <td>14.10.2022</td>
                                <td>14.10.2023</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td>İyibize</td>
                                <td>Blog İçeriği</td>
                                <td>4</td>
                                <td>300</td>
                                <td>anahtar kelime1, anahtar kelime2, anahtar kelime3</td>
                                <td>14.10.2022</td>
                                <td>14.10.2023</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td>İyibize</td>
                                <td>Blog İçeriği</td>
                                <td>4</td>
                                <td>300</td>
                                <td>anahtar kelime1, anahtar kelime2, anahtar kelime3</td>
                                <td>14.10.2022</td>
                                <td>14.10.2023</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td>İyibize</td>
                                <td>Blog İçeriği</td>
                                <td>4</td>
                                <td>300</td>
                                <td>anahtar kelime1, anahtar kelime2, anahtar kelime3</td>
                                <td>14.10.2022</td>
                                <td>14.10.2023</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container-fluid pt-4 px-4">
            </div>
        </div>
    )
}

export default AdminHome