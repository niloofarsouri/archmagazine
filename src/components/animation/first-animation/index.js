

function FirstAnimation() {


    return (
        <>

            <section className="w-3/5 m-auto h-auto">
                <div className="w-full h-auto p-3 mb-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">

                    <div className="card first-card w-[18rem] h-auto m-1 mr-7 bg-[#e0d2b7] hover:shadow-xl shadow-[#fff7e3] lg:relative lg:m-0">
                        <img src="/images/img/barock1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body p-3">
                            <h5 className="card-title">معماری (architecture)</h5>
                            <p className="text-justify">
                                یک اصطلاح کلی برای توصیف ساختمان ها و سایر سازه های فیزیکی. هنر و علم طراحی ساختمان ها و (برخی) سازه های غیر ساختمانی. سبک طراحی و روش ساخت ساختمان ها و سایر سازه های فیزیکی. شکل یا ساختار یکپارچه یا منسجم.
                            </p>
                            {/* <a className="btn btn-primary">Show more</a> */}
                        </div>
                    </div>


                    <div className="card second-card w-[18rem] h-auto m-1 mr-7 bg-[#e0d2b7] hover:shadow-xl shadow-[#fff7e3] lg:relative lg:m-0">
                        <img src="/images/img/memari-manzar.jpg" className="card-img-top" alt="..." />
                        <div className="card-body p-3">
                            <h5 className="card-title">معماری منظر (landscape architecture)</h5>
                            <p className="text-justify">
                                معماری منظر شامل برنامه ریزی، طراحی، مدیریت و
                                پرورش محیط های ساخته شده و طبیعی با مجموعه مهارت منحصر به فرد خود، چشم انداز
                                معماران برای بهبود سلامت انسان و محیط زیست در همه جوامع تلاش می کنند.
                            </p>
                            {/* <a className="btn btn-primary">Show more</a> */}
                        </div>
                    </div>


                    <div className="card third-card w-[18rem] h-auto m-1 mr-7 bg-[#e0d2b7] hover:shadow-xl shadow-[#fff7e3] lg:relative lg:m-0">
                        <img src="/images/img/interior (1).jpg" className="card-img-top" alt="..." />
                        <div className="card-body p-3">
                            <h5 className="card-title">معماری داخلی (Interior Architecture)</h5>
                            <p className="text-justify">
                                معماری داخلی که عموماً به عنوان هنر فضایی طراحی محیطی نامیده می شود، همچنین به فرآیندی اطلاق می شود که در آن فضاهای داخلی ساختمان ها به گونه ای طراحی می شوند که به تمام جنبه های استفاده انسان از فضاهای سازه ای آن ها بپردازند. به زبان ساده، معماری داخلی طراحی داخلی از نظر معماری است.
                            </p>
                            {/* <a className="btn btn-primary">Show more</a> */}
                        </div>
                    </div>


                    <div className="card fourth-card w-[18rem] h-auto m-1 mr-7 bg-[#e0d2b7] hover:shadow-xl shadow-[#fff7e3] lg:relative lg:m-0">
                        <img src="/images/img/light.webp" className="card-img-top" alt="..." />
                        <div className="card-body p-3">
                            <h5 className="card-title">معماری نورپردازی (Lighting architecture)</h5>
                            <p className="text-justify">
                                طراحی نورپردازی معماری رشته ای از کار یا مطالعه است که با طراحی سیستم های روشنایی در محیط ساخته شده اعم از داخلی و خارجی سروکار دارد. این می تواند طراحی نور روز و نور الکتریکی یا همان نور شب و سا هر دو باشد تا نیازهای انسان را برآورده کند
                            </p>
                            {/* <a className="btn btn-primary">Show more</a> */}
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}


export default FirstAnimation



{/* <div className="w-full min-h-screen slide_second p-3 mt-[60px] flex justify-center items-center md:mt-0">

<div className="card first-card w-[18rem]">
    <img src="/images/img/arch.jpg" className="card-img-top" alt="..." />
    <div className="card-body p-3">
        <h5 className="card-title">architecture</h5>
        <p className="card-text">A general term to describe buildings and other physical structures. The
            art and science of designing buildings and (some) nonbuilding structures. The style of
            design and method of construction of buildings and other physical structures. A unifying
            or coherent form or structure.</p>
        <a className="btn btn-primary">Show more</a>
    </div>
</div>


<div className="card second-card w-[18rem]">
    <img src="/images/img/memari-manzar.jpg" className="card-img-top" alt="..." />
    <div className="card-body p-3">
        <h5 className="card-title">landscape architecture</h5>
        <p className="card-text">Landscape architecture involves the planning, design, management, and
            nurturing of the built and natural environments. With their unique skill set, landscape
            architects work to improve human and environmental health in all communities.</p>
        <a className="btn btn-primary">Show more</a>
    </div>
</div>


<div className="card third-card w-[18rem]">
    <img src="/images/img/interior (1).jpg" className="card-img-top" alt="..." />
    <div className="card-body p-3">
        <h5 className="card-title">Interior Architecture</h5>
        <p className="card-text">Generally referred to as the spatial art of environmental design,
            interior architecture also refers to the process by which the interiors of buildings are
            designed to address all aspects of the human use of their structural spaces. Put simply,
            interior architecture is the design of an interior in architectural terms.</p>
        <a className="btn btn-primary">Show more</a>
    </div>
</div>


<div className="card fourth-card w-[18rem]">
    <img src="/images/img/light.webp" className="card-img-top" alt="..." />
    <div className="card-body p-3">
        <h5 className="card-title">Lighting architecture</h5>
        <p className="card-text">Architectural lighting design is a field of work or study that is
            concerned with the design of lighting systems within the built environment, both
            interior and exterior. It can include manipulation and design of both daylight and
            electric light or both, to serve human needs</p>
        <a className="btn btn-primary">Show more</a>
    </div>
</div>

</div> */}