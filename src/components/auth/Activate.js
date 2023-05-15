import React, {  useState } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { activate } from "../../redux/actions/auth/auth";
import { ColorRing } from "react-loader-spinner";

function Activate({ activate, loading }) {
  

  const params = useParams();
  const [activated, setActivated] = useState(false);

  const activate_account = () => {
    const uid = params.uid;
    const token = params.token;
    activate(uid, token);
    setActivated(true);
  };

  if (activated && !loading) return <Navigate to="/auth/acceder" />;
  return (
    <>
      <div className="h-[850px] pt-20">
        <div className="flex items-center justify-center py-12">
          <div className="bg-white rounded-md flex items-center justify-center mx-4 ">
            <div className="flex flex-col items-center ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Workflow"
          />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Pulsa el botón para activar tu cuenta
          </h1>
        </div>
              {loading ? (
                <button className="inline-flex items-center px-4 border -transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </button>
              ) : (
                <button
                  onClick={activate_account}
                  className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Activar cuenta
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  activate,
})(Activate);
