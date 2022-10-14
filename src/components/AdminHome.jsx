import React from 'react'
import { Input } from 'reactstrap'

const AdminHome = () => {
    return (
        <div className="container-fluid pt-4 px-4">
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
        </div>
    )
}

export default AdminHome