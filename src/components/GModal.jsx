import "../style/gmodal.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Presets, Client } from "userop";
import t_abi from "../tokenABI/erc20.json";
import n_abi from "../tokenABI/erc721.json";

const token_add = "0x92cA56ea530d4d648078c6127F6B0dC53C9c1a37";
const nft_add = "0x1a3e2Bf4C257c2213385CE24E7a8a17Ba59e4f78";

const GModal = ({ title, title2, index, length, setIsActive, setNFT }) => {
  const signingKey = process.env.REACT_APP_SIGNING_KEY;
  const rpcUrl = process.env.REACT_APP_RPC_URL;
  const { address } = useContext(AppContext);
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.REACT_APP_RPC_URL
  );
  const t_c = new ethers.Contract(token_add, t_abi, provider);
  const n_c = new ethers.Contract(nft_add, n_abi, provider);
  const [signer, setSigner] = useState();
  const [builder, setBuilder] = useState();
  const { num, setNum, showModal, setShowModal } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickBtn = () => {
    setNum(num + 100);
    setShowModal(!showModal);
    setIsActive([0, 0, 0, 0]);
    if (index <= length) {
      navigate(`/detail/${index}`);
    } else {
      t_mint();
      n_mint();
      setNFT(true);
      navigate(`/topic`);
    }
  };

  const connect = async () => {
    const t_signer = new ethers.Wallet(signingKey);
    setSigner(t_signer);

    const paymasterMiddleware = Presets.Middleware.verifyingPaymaster(
      process.env.REACT_APP_PAYMASTER_URL,
      {
        type: "payg",
        // token : "erc20token을 넣는건가?? 잘 모르겠다"
      }
    );

    const t_builder = await Presets.Builder.Kernel.init(t_signer, rpcUrl, {
      paymasterMiddleware: paymasterMiddleware,
    });
    setBuilder(t_builder);
  };

  const t_mint = async () => {
    try {
      // const destination_add = address;
      console.log(`local address : ${address}`);
      // destination_add : 토큰 받을 주소
      const mint = {
        to: token_add, // 컨트렉트 주소
        value: ethers.constants.Zero,
        data: t_c.interface.encodeFunctionData("mint", [address]), // 여기 들어감
      };

      console.log("set token mint");

      builder.executeBatch([mint]);
      // mint 에러남 , [mint] 에러남
      // [] {} 차이체크

      console.log(`set builder : ${builder}`);

      // Send the user operation
      const client = await Client.init(rpcUrl);
      const res = await client.sendUserOperation(builder, {
        onBuild: (op) => console.log("Signed UserOperation :", op),
      });
      console.log(`UserOPHash: ${res.userOpHash}`);
      console.log("Waiting for transaction...");
      const ev = await res.wait();
      console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
    } catch (error) {
      console.log(error);
    }
  };

  const n_mint = async () => {
    try {
      const metadataURI =
        "https://olbm.mypinata.cloud/ipfs/QmbzV8qMuzPxe3ML6GVfrGpAAcN3n8q1GLvyt85A5HXopP";
      // const destination_add = address;
      // destination_add : NFT 받을 주소
      const mint = {
        to: nft_add, // 컨트렉트 주소
        value: ethers.constants.Zero,
        data: n_c.interface.encodeFunctionData("mint", [address, metadataURI]), // 여기 들어감
      };

      console.log("set nft mint");

      builder.executeBatch([mint]);
      // mint 에러남 , [mint] 에러남
      // [] {} 차이체크

      console.log("set builder");

      // Send the user operation
      const client = await Client.init(rpcUrl);
      const res = await client.sendUserOperation(builder, {
        onBuild: (op) => console.log("Signed UserOperation :", op),
      });
      console.log(`UserOPHash: ${res.userOpHash}`);
      console.log("Waiting for transaction...");
      const ev = await res.wait();
      console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connect();
    console.log(address);
    console.log(`signing key : ${process.env.REACT_APP_SIGNING_KEY}`);
    console.log(`RPC url : ${process.env.REACT_APP_RPC_URL}`);
    console.log(`paymaster url : ${process.env.REACT_APP_PAYMASTER_URL}`);
    console.log("ok");
  }, []);

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className=" mx-auto ">
            <div className="gmodal-box1  m-[20px]">
              <div>
                <div className="flex mb-[24px]">
                  <img
                    className="mr-[16px]"
                    src="../images/Group.svg"
                    alt="보내기 "
                  />
                  {/* <div className="mr-[16px] w-[226px] gmodal-text1">
                            Correct!
                        </div> */}
                  <div className="mr-[16px] w-[226px] gmodal-text1">
                    {title}
                  </div>
                  <img
                    className="mr-[20px] "
                    src="../images/MaskGroup.svg"
                    alt="보내기 "
                  />
                  <img
                    className=" "
                    src="../images/gmodal-i.svg"
                    alt="보내기 "
                  />
                </div>
              </div>
              {/* disabled={Number(length) >= 3 */}

              <button
                className="gmodal-button gmodal-button-text"
                onClick={onClickBtn}
              >
                {title2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GModal;
