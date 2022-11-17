import React from 'react'
import { useSiteContext } from '../context/SiteContext'

const Notifications = () => {

    const { dummyContents } = useSiteContext();

    return (

        < div className="container-fluid pt-4 px-4" >
            <div className="row g-4 mb-5">
                <h2>Bildirimler</h2>
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
                        {dummyContents.map((content, index) =>
                            <tbody key={index}>
                                <tr>
                                    <td>{content.title}</td>
                                    <td>{content.startDate}</td>
                                    <td>{content.endDate}</td>
                                    <td>{content.status}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>

        </div >
    )
}

export default Notifications