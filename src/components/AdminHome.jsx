import React from 'react'
import { Input } from 'reactstrap'
import  'https://code.jquery.com/jquery-3.4.1.min.js';
import  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js';

const AdminHome = () => {
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
            <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Basic Accordion</h6>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item bg-transparent">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Gubergren justo eos magna eirmod lorem magna, amet dolores ipsum sadipscing ipsum consetetur invidunt et clita diam, vero dolor dolor est eirmod. Rebum accusam amet ipsum et. Et et lorem sanctus amet eos eos elitr ea, sanctus magna et et sed eos sit takimata sadipscing, dolor rebum sed stet vero.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item bg-transparent">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Voluptua sit dolores consetetur ea et diam est et takimata. Et erat sadipscing dolores et stet diam ut ut diam, sit aliquyam no magna et dolore lorem dolor sit. Lorem lorem sed sed duo, eirmod sit diam ipsum sit erat, lorem sit dolor diam amet ea aliquyam tempor rebum invidunt,.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item bg-transparent">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Dolore eos dolor tempor justo sea eos amet eos kasd dolor, et diam tempor lorem dolores vero. Stet dolore gubergren nonumy diam. Consetetur sit takimata magna invidunt, dolore sea amet consetetur ea et rebum, invidunt et amet sit sea. Dolor eirmod sed magna sadipscing sadipscing lorem lorem sed, sit lorem.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default AdminHome