/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MostPopular from "../../../components/shared/MostPopular";
import { Link } from "react-router-dom";
import { Pagination } from "../../../components/shared/Pagination";
import { SocialHref } from "../../../components/shared/SocialHref";
import { PerfilCard } from "../../../components/perfil/PerfilCard";

export default function Perfil() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
       <div>
        {/* block news */}
        <div className="bg-gray-50 py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              {/* Left */}
              <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" /> Author Profile
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  <div className="flex-shrink max-w-full w-full px-3 pb-5">
                    <div className="p-4 border border-gray-100 bg-white mb-4">
                      <div className="flex flex-row items-center">
                        <div className="rounded-full overflow-hidden">
                          <Link to="#"><img className="border max-w-full w-20 sm:w-32" src="src/img/dummy/avatar.jpg" alt="author" /></Link>
                        </div>
                        <div className="ml-8">
                          {/*name*/}
                          <h4 className="text-2xl">
                            <span className="font-bold">Ari budin</span>
                          </h4>
                          {/* website */}
                          <p><Link target="_blank" className="hover:text-blue-500" rel="noopener" to="https://aribudin.com">https://aribudin.com</Link></p>
                          {/*description*/}
                          <p className="hidden sm:block">Programmer, Father, Husband, I design and develop Tailwind template, founder of Tailnet</p>
                          {/*social*/}
                          <SocialHref/>
                          {/*end social*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full px-3">
                    <div className="w-full py-3">
                      <h2 className="text-gray-800 text-2xl font-bold">
                        <span className="inline-block h-5 border-l-3 border-red-600 mr-2" /> Post by Ari Budin
                      </h2>
                    </div>
                  </div>
                  <PerfilCard/>
                </div>
                <div className="text-center mt-4">
                  {/* center pagination */}
                  <Pagination/>
                </div>
              </div>
              {/* right */}
              <MostPopular/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
